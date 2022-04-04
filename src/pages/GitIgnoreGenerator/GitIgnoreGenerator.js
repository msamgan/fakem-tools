import React, { useEffect } from "react"
import MasterLayout from "../../layout/MasterLayout/MasterLayout"
// import fs from "fs"

const GitIgnoreGenerator = () => {
    //const [gitIgnore, setGitIgnore] = useState([])
    // const dir = "/src/pages/GitIgnoreGenerator/gitignore"
    useEffect(() => {
       /*  const files = fs(dir)
        for (const file of files) {
            console.log(file)
        } */
    }, [])

    return (
        <MasterLayout>
            <div className={"container mb-3 mt-5 min-height"}>
                <h1 className={"mt-4"}># Git Ignore Generator</h1>
                <p className={"text-muted"}>Generate a .gitignore file.</p>
                <div className={"row mt-3"}>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default GitIgnoreGenerator
