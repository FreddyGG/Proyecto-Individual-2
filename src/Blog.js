import { render } from '@testing-library/react'
import React from 'react'
import Card from './Components/Card';
import { Layout, Image, Row, Col } from 'antd';
import "antd/dist/antd.css";
const { Header, Footer, Sider, Content } = Layout;

const cards = [
    {
        titulo: "Nuevas GeForce RTX Series 3000",
        contenido: "Nvidia anuncio sus nuevas tarjetas graficas los cuales salen este mes de Septiembre, mostro las novedades que traen y el rendimiento que tendran. En NVIDIA no se han dormido en los laureles, y hoy presentan por fin la esperada evolución de la arquitectura Turing. Se llama Ampere, y llega con mejoras notables en todos los apartados. Para demostrarlo tenemos con nosotros las nuevas NVIDIA GeForce RTX 3070, RTX 3080 y RTX 3090, unas gráficas absolutamente bestiales que más o menos doblan los rendimientos de sus antecesoras con precios más bajos que los de sus predecesoras",
        imagen_url: "https://static.techspot.com/images2/news/bigimage/2020/08/2020-08-28-image-21.jpg"
    },
    {
        titulo: "Sony y la tan esperada PlayStation 5",
        contenido: "Sony porfin ha anunciado el precio y la fecha de salida que tendran sus consolas de nueva generacion, los cuales resultan ser bastante competitivo con su rival directo Microsoft y sus nuevas Xbox. Sony pone el punto final a los rumores. En su conferencia online presentó los juegos de la PS5 y otros detalles. La PlayStation 5 por fin salió a la luz pública con su precio de venta y fecha oficial de salida, según en qué parte del mundo te encuentres. Todas las novedades se dieron a conocer en un evento online.",
        imagen_url: "https://pbs.twimg.com/media/EiELrJKWsAEGRYf?format=jpg&name=4096x4096"
    },
    {
        titulo: "Mercedes Benz muestra su nuevo vehiculo electrico",
        contenido: "Cuando Mercedes-Benz nos mostró en el CES 2020 su concepto de Vision AVTR inspirado en la película 'Avatar' no esperábamos mucho más de ello. Estábamos equivocados, el fabricante ha hecho realidad este vehículo y nos muestra cómo es conducirlo por la calle con su hipnótico diseño y esas ruedas prácticamente surrealistas. Este coche eléctrico de Mercedes-Benz, si bien no se producirá en masa, tiene una versión funcional con la que se puede circular. Lo cierto es que por mucho que parezcan imágenes hechas por ordenador el vehículo es 100% real, esto hace que sea más increíble aún.",
        imagen_url: "https://i.blogs.es/e82402/screenshot-4/1366_2000.jpg"
    }
]

function Blog() {
    return(
        <Layout>
            <Header style={{height: 70}}>
                <space align="center">
                <div style={{color: "white", fontSize:40}}>
                    <strong>La actualidad de la tecnologia</strong>
                    </div>
                </space>
            </Header>
            <Layout>
                <Sider style={{background: "lightgray", width: 300}}>
                    <p>
                        <strong style={{color: "black", fontSize:17, margin: 10}}>Categorias</strong>
                    </p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Ultima Hora</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Videojuegos</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>SmartPhones</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Informatica</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Nuevos Lanzamientos</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Ultimas novedades</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Apple</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Sony</p>
                    <p style={{color: "black", fontSize:17, margin: 10}}>Samsung</p>
                    <p></p>
                    <br/>
                        <strong style={{color: "black", fontSize:17, margin: 10}}>Articulos para ti</strong>
                    <Card title="La apuesta de Microsoft" style={{ width: 195 }}>
                    <p>Asi luce la nueva Xbox, caracteristicas y precios.</p>
                    <Image
                        width={150}
                        src="https://i.blogs.es/73ba2e/xbox2/1366_2000.jpg"
                    />
                </Card>
                </Sider>
            
            <Content>
                <div className="site-layout-content">
                    { cards.map(card => {
                        return (
                            <Row>
                                <Card title={card.titulo} bordered={true}>
                                    <Image widht={400} src={card.imagen_url}/>
                                    <br/>
                                    <p>
                                        {card.contenido}
                                    </p>
                                </Card>
                            </Row>
                        )
                    })}
                </div>
            {/* <Row>
                <Col span={20} offset={2}>
                <h1><strong style={{color: "black", fontSize:20}}>Ultimas Noticias</strong></h1>
                <Card title="Nuevas GeForce RTX Series 3000" style={{ width: 650 }}>
                    <p>Nvidia anuncio sus nuevas tarjetas graficas los cuales salen este mes de Septiembre, mostro las novedades que traen y el rendimiento que tendran. En NVIDIA no se han dormido en los laureles, y hoy presentan por fin la esperada evolución de la arquitectura Turing. Se llama Ampere, y llega con mejoras notables en todos los apartados. Para demostrarlo tenemos con nosotros las nuevas NVIDIA GeForce RTX 3070, RTX 3080 y RTX 3090, unas gráficas absolutamente bestiales que más o menos doblan los rendimientos de sus antecesoras con precios más bajos que los de sus predecesoras.</p>
                    <Image
                        width={400}
                        src="https://static.techspot.com/images2/news/bigimage/2020/08/2020-08-28-image-21.jpg"
                    />
                </Card>
                
                <Card title="Sony y la tan esperada PlayStation 5" style={{ width: 650 }}>
                    <p>Sony porfin ha anunciado el precio y la fecha de salida que tendran sus consolas de nueva generacion, los cuales resultan ser bastante competitivo con su rival directo Microsoft y sus nuevas Xbox. Sony pone el punto final a los rumores. En su conferencia online presentó los juegos de la PS5 y otros detalles. La PlayStation 5 por fin salió a la luz pública con su precio de venta y fecha oficial de salida, según en qué parte del mundo te encuentres. Todas las novedades se dieron a conocer en un evento online.</p>
                    <Image
                        width={400}
                        src="https://pbs.twimg.com/media/EiELrJKWsAEGRYf?format=jpg&name=4096x4096"
                    />
                </Card>
                <Card title="Mercedes Benz muestra su nuevo vehiculo electrico" style={{ width: 650 }}>
                    <p>Cuando Mercedes-Benz nos mostró en el CES 2020 su concepto de Vision AVTR inspirado en la película 'Avatar' no esperábamos mucho más de ello. Estábamos equivocados, el fabricante ha hecho realidad este vehículo y nos muestra cómo es conducirlo por la calle con su hipnótico diseño y esas ruedas prácticamente surrealistas. Este coche eléctrico de Mercedes-Benz, si bien no se producirá en masa, tiene una versión funcional con la que se puede circular. Lo cierto es que por mucho que parezcan imágenes hechas por ordenador el vehículo es 100% real, esto hace que sea más increíble aún.</p>
                    <Image
                        width={400}
                        src="https://i.blogs.es/e82402/screenshot-4/1366_2000.jpg"
                    />
                </Card>
                </Col>
            </Row> */}
            </Content>
            </Layout>
            <Footer>
                <div>
                    Siguenos en nuestras redes:
                    <Row>
      <Col span={8}>
      <div>
                        <Image
                        width={30}
                        src="https://lh3.googleusercontent.com/proxy/yE5Jlo_mX6TzmOqo49WHd5r4qBmFYN_gNuNxJkG-TEzt8odWP2VoEJ5orrP9XQriWG5Fgl2IRr_u0JjZ8E1U7KsM51LFA_NzVnZNJ3QMtaRHSXPO4Lk"
                        />
                        @tecnologiaactual
                    </div>
                    </Col>
      <Col span={8}>
      <div>
                        <Image
                        width={30}
                        src="https://lh3.googleusercontent.com/proxy/Q2EGhJFusv8065Lrx2WKxDdZZZYCbg1L3wfWQCWDuNZwNjbHXIYKV8Io4DUstsYpO2CthEgBsTqnRbmIyA1rFFUsIbhtJvaxTySLCeQdjeh-2oXbDBg"
                        />
                        @tecnologiaactual
                    </div>
                    </Col>
      <Col span={8}>
      <div>
                        <Image
                        width={30}
                        src="https://lh3.googleusercontent.com/proxy/3lwlo0ziSu5NdBOqQ7lULVBPBoyWLZ7Lkreky7IdBS-EZGV821nJZf-itpbJMwFH04yveRRqkhRk1omh9K2grLglZ7J4-_ksKlj57GQudGCRQPAaI50"
                        />
                        Tecnologia Actual
                    </div>
      </Col>
    </Row>
    </div>
            </Footer>
        </Layout>
    )
}



























// class Bolg extends React.Component{
//     state = {
//         name: "Freddy"
//     }

//     onClickTest = () => {
//         this.setState({ name: "Freddy Changed"})
//     }

//     onClickTest = function () {
//         this.setState({name:"Freddy Changed"})
//     }
// }

//     render() {
//         console.log('render blog...')
//         return(
//             <>
//             <div>{this.state.name}</div>
//             <button onCLick={()}
//         )
//     }

export default Blog;