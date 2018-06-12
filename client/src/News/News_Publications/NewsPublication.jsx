import React, { Component } from 'react';
import NewsPublicationBlock from './NewsPublicationBlock'
import './event.css'


class NewsPublication extends Component {

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
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quo eveniet placeat. In porro, repudiandae ipsum voluptatibus ratione enim accusantium rem consequatur ab? Alias tenetur ratione quibusdam accusantium aut quis totam! Voluptas labore officiis, unde sequi ad fuga, ex assumenda dolorem placeat atque excepturi ipsa architecto dolores dignissimos quod quibusdam quasi repellat vero cum perspiciatis laboriosam qui sint exercitationem quisquam. Quisquam suscipit fugiat doloremque quasi ad debitis dolor quaerat nihil aliquam at ducimus consequuntur repudiandae numquam eligendi, fugit, excepturi doloribus!",
                    href: "http://www.google.com",
                    img: "./img/city.png",
                    date : '19-5-2018'
                },
                {
                    title: 'template wow',
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quo eveniet placeat. In porro, repudiandae ipsum voluptatibus ratione enim accusantium rem consequatur ab? Alias tenetur ratione quibusdam accusantium aut quis totam! Voluptas labore officiis, unde sequi ad fuga, ex assumenda dolorem placeat atque excepturi ipsa architecto dolores dignissimos quod quibusdam quasi repellat vero cum perspiciatis laboriosam qui sint exercitationem quisquam. Quisquam suscipit fugiat doloremque quasi ad debitis dolor quaerat nihil aliquam at ducimus consequuntur repudiandae numquam eligendi, fugit, excepturi doloribus!",
                    href: "http://www.google.com",
                    img: "./img/city.png",
                    date : '19-5-2018'
                },
                {
                    title: 'template wow',
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quo eveniet placeat. In porro, repudiandae ipsum voluptatibus ratione enim accusantium rem consequatur ab? Alias tenetur ratione quibusdam accusantium aut quis totam! Voluptas labore officiis, unde sequi ad fuga, ex assumenda dolorem placeat atque excepturi ipsa architecto dolores dignissimos quod quibusdam quasi repellat vero cum perspiciatis laboriosam qui sint exercitationem quisquam. Quisquam suscipit fugiat doloremque quasi ad debitis dolor quaerat nihil aliquam at ducimus consequuntur repudiandae numquam eligendi, fugit, excepturi doloribus!",
                    href: "http://www.google.com",
                    img: "./img/city.png",
                    date : '19-5-2018'
                }
            ]
        });
    }


    render() {
        let blocks = [];
        blocks = this.state.wordBoxes.map((block, i) => {
            return (<NewsPublicationBlock key={i} title={block.title} img={block.img} text={block.text} href={block.href} date={block.date} />);
        });

        return (
            <section id="content">
                <div className="wrapper2" >
                    {blocks}
                </div>
                <div class="viewMorebtn">
                    <button type="button" class="btn">view More</button>
                </div>
            </section>
        )
    }

}

export default NewsPublication;
