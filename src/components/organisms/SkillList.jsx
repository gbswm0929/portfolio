import './SkillList.module.css'
import skilllist from "../../store/skilllist"

function Projects() {
    return (
        <>
            <main>
                <div>
                    <h2>Skill stacks</h2>
                    <table>
                        <tr>
                            <td>Skill</td>
                        </tr>
                            {skilllist.map(datas => (
                                <tr>
                                    <td>{datas.name}</td>
                                    <td>{datas.introduction}</td>
                                </tr>
                            ))}
                    </table>
                </div>
            </main>
        </>
    )
}

export default Projects