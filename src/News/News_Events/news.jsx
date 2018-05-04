import React, { Component } from 'react';
import NewsBlock from './newsBlock'
import './news.css'


class NewsEvents extends Component {

    constructor() {
        super();
        this.state = {
            wordBoxes: []
        }
    }


    componentWillMount() {
        this.setState({
            wordBoxes: [
                {
                    title: 'template wow',
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
                    href: "http://www.google.com",
                    date : '19-8-2018'
                },
                {
                    title: 'template wow',
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quo eveniet placeat. In porro, repudiandae ipsum voluptatibus ratione enim accusantium rem consequatur ab? Alias tenetur ratione quibusdam accusantium aut quis totam! Voluptas labore officiis, unde sequi ad fuga, ex assumenda dolorem placeat atque excepturi ipsa architecto dolores dignissimos quod quibusdam quasi repellat vero cum perspiciatis laboriosam qui sint exercitationem quisquam. Quisquam suscipit fugiat doloremque quasi ad debitis dolor quaerat nihil aliquam at ducimus consequuntur repudiandae numquam eligendi, fugit, excepturi doloribus!",
                    href: "http://www.google.com",
                    date : '19-8-2018'
                },
                {
                    title: 'template wow',
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quo eveniet placeat. In porro, repudiandae ipsum voluptatibus ratione enim accusantium rem consequatur ab? Alias tenetur ratione quibusdam accusantium aut quis totam! Voluptas labore officiis, unde sequi ad fuga, ex assumenda dolorem placeat atque excepturi ipsa architecto dolores dignissimos quod quibusdam quasi repellat vero cum perspiciatis laboriosam qui sint exercitationem quisquam. Quisquam suscipit fugiat doloremque quasi ad debitis dolor quaerat nihil aliquam at ducimus consequuntur repudiandae numquam eligendi, fugit, excepturi doloribus!",
                    href: "http://www.google.com",
                    date : '19-8-2018'
                }
            ]
        });
    }


    render() {
        let blocks = [];
        blocks = this.state.wordBoxes.map((block, i) => {
            return (<NewsBlock key={i} title={block.title} date={block.date} text={block.text} href={block.href} />);
        });


        return (
            <section id="content">
                <div className="wrapper2" >
                    {blocks}
                </div>
                <div className="viewMorebtn" >
                    <button type="button" className="btn">view More</button>
                </div>
            </section>

        )
    }
}

export default NewsEvents;
