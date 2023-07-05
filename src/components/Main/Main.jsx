
import "./main.css";

const Main = () => {
  return (
   <>
    <main>
        <section className="text">
            <h1 className="title">Modern interior</h1>
            <h3 className="description">A full-Service residential & commercial interior design and staging company offering proffesional organizing and eco-services.</h3>
            <a href="" className="link">Read more&nbsp;  →</a>
        </section>
        <section className="img">
            <img src="/img/photo1.png" alt="living room" className="living-room"/>
            <div className="card">
                <div className="name">
                    <img src="/img/photo2.png" alt="Aliza Webber" />
                    <div>
                        <h6>Aliza Webber</h6>
                        <p>Interior designer</p>
                    </div>
                </div>
                <h4>Designed in 2020 by Aliza Webber</h4>
            </div>
        </section>
    </main>
    <footer>
        <p>created by <a href="https://devchallenges.io/portfolio/valumarch" target="_blank">valumarch</a> - devChallenges.io </p>
    </footer>
   </>
  )
}

export default Main