var fs = require('fs')
const path  = require('path')
const {execSync} = require('child_process')
const console = require('console')

const execSyncWrapper = (command) => {
    let stdout = null
    try {
        stdout = execSync(command).toString().trim()
    } catch(error) {
        console.error(error)
    }
    return stdout
}

const main = () => {
    let gitBranch = execSyncWrapper('echo ${CI_COMMIT_REF_NAME}')
    let gitCommitHash = execSyncWrapper('git rev-parse --short=8 HEAD')
    let buildDate = new Date()

    console.log('🚧 gitBranch 🚧', gitBranch)
    console.log('🚧 gitCommitHash 🚧', gitCommitHash)
    console.log('🚧 buildDate 🚧', buildDate)

const obj = {
    gitBranch,
    gitCommitHash,
    buildDate
}

const fileContent = JSON.stringify(obj, null, 3)

fs.writeFileSync('./src/utils/gitInfo.json', fileContent)
}