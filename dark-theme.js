const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")


const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    card: getStyle(html, '--card'),
    head: getStyle(html, '--head'),
    table: getStyle(html, '--table'),
}

// DarkMode
const darkMode = {
    bg: "#222222",
    card: "#333333",
    table: "#333333",
    head: "#FFFFFF",
}

const transformKey = key => 
    "--" + key.replace (/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys (colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
        )

}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors (darkMode) : changeColors(initialColors)
}) 