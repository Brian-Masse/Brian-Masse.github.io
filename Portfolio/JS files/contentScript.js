const body = document.body


class ProjectEntry {
    constructor(title, date, description, imageSource, codeLabel, language, code) { 
        this.title = title
        this.date = date
        this.description = description
        this.imageSource = imageSource
        this.codeLabel = codeLabel
        this.language = language
        this.code = code
        this.code = code
    }
}

const entries= [
    new ProjectEntry("PART TO WHOLE VIS",
    "12 / 5 / 2021",
    "This is a description of this project",
    ["Images/12-5-21/graph1.png", "Images/12-5-21/graph2.png"],
    "_PYTHON: PW.py",
    "python",
    '\nimport matplotlib as plt\nimport seaborn as sns\n\ndark_purple = (190 / 255, 212 / 255, 255 / 255)\nmid_purple = (201 / 255, 193 / 255, 245 / 255)\ntan = (252 / 255, 209 / 255, 175 / 255)\n\nplt.rcParams.update({"font.size": 5})\npurpleCmap = sns.cubehelix_palette(as_cmap=True)\nbeachCMap = plt.colors.LinearSegmentedColormap.from_list(\n    "", [dark_purple, mid_purple, tan])\n\ndeaths = sns.load_dataset("AnimalDeaths")\npercentOfGender = deaths.pivot_table(\n    "percent", index="Animal", columns="Gender")\npercentOfAnimalKills = deaths.pivot_table(\n    "percent2", index="Animal", columns="Gender")\n\n\n# pG = sns.heatmap(percentOfGender, vmin=0, vmax=50, cmap=purpleCmap, annot=True).set(\n#     title="Deaths by an animal, as a percent of the total deaths of a gender")\npAK = sns.heatmap(percentOfAnimalKills, vmin=0, vmax=100, cmap=purpleCmap, annot=True).set(\n    title="Deaths of a gender by an animal, as a percent of the total kills by that animal")\n\nplt.pyplot.show()\n\n')
]

const HStack = document.createElement("div")
HStack.className="HStack"
body.appendChild(HStack)

for ( let i = 0; i < entries.length ; i ++ ) {
    const projectEntry = document.createElement("div")
    projectEntry.className = "projectEntry relativePos il"
    

    const background = document.createElement("div")
    background.className = "background"
    projectEntry.appendChild(background)

    const filler = document.createElement("div")
    filler.className = "filler"

    const title = document.createElement("span")
    const date = document.createElement("span")
    title.className = "top left glowText"; date.className = "top right glowText"
    title.innerText = entries[i].title; date.innerText = entries[i].date
    projectEntry.appendChild(filler);projectEntry.appendChild(title);projectEntry.appendChild(date)

    const description = document.createElement("p")
    description.className = "text"
    description.innerText = entries[i].description
    projectEntry.appendChild(description)

    for (let f = 0; f < entries[i].imageSource.length; f ++) {
        const image = document.createElement("img")
        image.src = entries[i].imageSource[f]
        image.className = "image roundShadow ol"
        projectEntry.appendChild(image)
    }
    

    const codeBlock = document.createElement("div")
    codeBlock.className = "relativePos"
    const codeTitle = document.createElement("div")
    codeBlock.appendChild(codeTitle)
    codeTitle.className = "glowText top left"
    codeTitle.innerText = entries[i].codeLabel

    const codePre = document.createElement("pre")
    codeBlock.appendChild(codePre)
    const code = document.createElement("code")
    codePre.appendChild(code)
    code.className="language-python"
    code.innerHTML=entries[i].code
    projectEntry.appendChild(codeBlock)

    const contentSpacer = document.createElement("div")
    contentSpacer.className = "contentSpacer il"

    HStack.appendChild(projectEntry)
    HStack.appendChild(contentSpacer)
}
