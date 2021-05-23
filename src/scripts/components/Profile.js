import React, { useContext } from 'react'
import project_json from "../config/product"
import { Context } from "../store/menu"

export default function ProfilePage() {
    const { store } = useContext(Context)

    const project = project_json.map(el =>
        <a href={el.link} key={el.id} target="_blank" rel="noopener noreferrer">
            <img src={el.thumb} alt={el.title} />
            <h4>{el.title}</h4>
            <p>{el.intro}</p>
            <time>{el.time}</time>
        </a>
    )

    return (
        <div id="profile-page" data-state={ store.dataState }>
            {/* header-box */}
            <section className="header-box">
                <div className="header" />
            </section>

            {/* description-box */}
            <section className="description-box">
                <div className="avatar" />
                <div className="author">Cyris</div>
                <div className="description">
                    {'\u00A0'}{'\u00A0'}新出的芽用它的温柔融化了少年心中的墙堵箭影，「绿生」由此而生。我希望通过 Coding 的方式来描绘自己的内心世界，因不甘平庸而奋起，因不达目标而不懈。
                </div>
            </section>

            {/* information-box */}
            <section className="information-box">
                <div className="title">Information</div>
                <div className="information">
                    <div className="inner">
                        <p>ID：Cyris／绿生</p>
                        <p>兴趣：ACG、Karaoke、RPG Games</p>
                        <p>最喜欢的颜色：<span style={{color: '#5e525e'}}>#5e525e</span></p>
                        <p>喜欢的食物：西西家今天的饭、中式面条、小米辣</p>
                        <p>工作：目前在阿里写前端</p>
                        <p>邮箱：i#cyris.moe (# -> @)</p>
                    </div>
                </div>
            </section>

            {/* project-box */}
            <section className="project-box">
                <div className="title">Project</div>
                <div className="project">
                    { project }
                </div>
            </section>

            {/* afterwords-box */}
            <section className="afterwords-box">
                <div className="title">Afterwords</div>
                <div className="paragraph">
                    {'\u00A0'}{'\u00A0'}感谢 yui540 创作的各种作品，无论是技术层面还是设计层面我都收获了很多。也感谢一直陪伴在我身边的人，我的每一段日常都是我的灵感来源。
                    <br/><br/>
                    "探求真理者不可心存傲慢。"
                </div>
            </section>

            {/* footer-box */}
            <section className="footer-box">
                <div className="footer">
                    <span>©{(new Date()).getFullYear()} Cyris. All rights reserved.</span>
                </div>
            </section>
        </div>
    )
}