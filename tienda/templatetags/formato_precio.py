from django import template

register = template.Library()

@register.filter
def formato_pesos_col(value):
    try:
        value = float(value)
        return "${:,.0f}".format(value).replace(",", ".")
    except (ValueError, TypeError):
        return value
