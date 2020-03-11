const fs = require("fs");
const fse = require("fs-extra");
const path = require('path');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');

const copyIcons = () => {
    const icons = './src/assets/icons'
    const buildIcons = './build/assets/icons'

    fse.copy(icons, buildIcons, function (err) {
        if (err) {
            console.log('An error occured while copying the icons folder.')
            return console.error(err)
        }
        console.log('Copy icons completed!')
    });
}

const copyImages = () => {
    const images = './src/assets/images'
    const buildImages = './build/assets/images'

    fse.copy(images, buildImages, function (err) {
        if (err) {
            console.log('An error occured while copying the images folder.')
            return console.error(err)
        }
        console.log('Copy images completed!')
    });
}

const copyTheme = () => {
    const images = './src/Theme'
    const buildImages = './build/Theme'

    fse.copy(images, buildImages, function (err) {
        if (err) {
            console.log('An error occured while copying the images folder.')
            return console.error(err)
        }
        console.log('Copy images completed!')
    });
}

const createReadme = () => {
    const targetFile = './build/README.md'
    const content = ``

    fs.writeFile(targetFile, content, (err, file) => {
        if (err) throw err
        console.log('creating readme file succesfully!')
    })
}

const createPackageFile = async () => {
    const packageJson = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8')

    const { scripts, devDependencies, eslintConfig, browserslist, jest, ...newPackageJson } = JSON.parse(
        packageJson,
    );
    
    newPackageJson.private = false
    const targetPath = path.resolve(buildPath, './package.json')

    await fse.writeFile(targetPath, JSON.stringify(newPackageJson, null, 2), 'utf8')
    console.log(`Created package.json in ${targetPath}`)

    return newPackageJson
}

const run = async () => {
    try {
        copyIcons()
        copyImages()
        copyTheme()
        createReadme()
        await createPackageFile()
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run()