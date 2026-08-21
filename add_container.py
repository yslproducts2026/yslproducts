import re, os

SITE = r"D:\website\yslproducts"
path = os.path.join(SITE, "js", "modal.js")

js = open(path, encoding="utf-8").read()

# Add containerLoad field after dimensions in each product
# Match: "dimensions": "...", "desc"
# Replace: "dimensions": "...", "containerLoad": "", "desc"
js = re.sub(
    r'("dimensions":\s*"[^"]*"),\s*("desc")',
    r'\1, "containerLoad": "", \2',
    js
)

# Add Container Load row in openModal
old = '''  h+="<tr><td>Dimensions</td><td>"+p.dimensions+"</td></tr>";
  document.getElementById("yslModalSpecs").innerHTML=h;'''
new = '''  h+="<tr><td>Dimensions</td><td>"+p.dimensions+"</td></tr>";
  if(p.containerLoad){h+="<tr><td>Container Load</td><td>"+p.containerLoad+"</td></tr>";}
  document.getElementById("yslModalSpecs").innerHTML=h;'''
js = js.replace(old, new)

with open(path, "w", encoding="utf-8") as f:
    f.write(js)

names = js.count('"name"')
cl = js.count('"containerLoad"')
print("Products:", names, "containerLoad fields:", cl)
print("Braces diff:", js.count("{")-js.count("}"), "Brackets diff:", js.count("[")-js.count("]"))
