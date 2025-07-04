from django import template
import re
import html

register = template.Library()

@register.filter(name='saltos_html')
def saltos_html(text):
    if not text:
        return ''

    # Escapar HTML por seguridad
    text = html.escape(text)

    # Asegurar espacio después de los títulos tipo ##Título → ## Título
    text = re.sub(r'^(#{1,3})([^\s#])', r'\1 \2', text, flags=re.MULTILINE)

    # Negrita: **texto** → <strong>
    text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)

    # Cursiva: *texto* → <em>
    text = re.sub(r'(?<!\*)\*(?!\*)(.*?)\*(?!\*)', r'<em>\1</em>', text)

    # Tachado: ~~texto~~ → <del>
    text = re.sub(r'~~(.*?)~~', r'<del>\1</del>', text)

    # Enlaces: [texto](url)
    text = re.sub(r'\[(.*?)\]\((https?://[^\s]+)\)', r'<a href="\2" target="_blank">\1</a>', text)

    lines = text.split('\n')
    result = []
    in_list = False

    for line in lines:
        stripped = line.strip()

        # Títulos (#, ##, ###)
        if stripped.startswith('### '):
            if in_list:
                result.append('</ul>')
                in_list = False
            result.append(f'<h3>{stripped[4:].strip()}</h3>')
            continue
        elif stripped.startswith('## '):
            if in_list:
                result.append('</ul>')
                in_list = False
            result.append(f'<h2>{stripped[3:].strip()}</h2>')
            continue
        elif stripped.startswith('# '):
            if in_list:
                result.append('</ul>')
                in_list = False
            result.append(f'<h1>{stripped[2:].strip()}</h1>')
            continue

        # Listas (- o •)
        if re.match(r'^[-•]\s+', stripped):
            if not in_list:
                result.append('<ul>')
                in_list = True
            item = re.sub(r'^[-•]\s+', '', stripped)
            result.append(f'<li>{item}</li>')
        else:
            if in_list:
                result.append('</ul>')
                in_list = False

            if stripped == '':
                result.append('<br>')
            else:
                result.append(f'{stripped}<br>')

    if in_list:
        result.append('</ul>')

    return '\n'.join(result)
