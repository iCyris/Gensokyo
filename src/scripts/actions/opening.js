import config from '../config/chapters'

export default (chapter_name) => {
    const chapter = chapter_name
    const description = config[chapter]

    return {
        name: chapter,
        description: description
    }
}