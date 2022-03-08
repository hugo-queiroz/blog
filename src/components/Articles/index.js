import Posts from '../Posts';

const Articles = () => {
    // requisição para api

    return (
        <section className="container">
            <h3>Articles</h3>
            <div className="container-posts mt-5">
                <Posts subtitle="tecnologia" title="O guia definitivo sobre o Blog">
                    1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa mollitia sapiente, quis quod impedit! Consequatur doloribus, nesciunt ex ratione aperiam nulla pariatur quibusdam suscipit? Dolore dolor molestias tempora natus.
                </Posts>
                <Posts subtitle="fotografia" title="Quais as melhores câmeras em 2021?">
                    2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa mollitia sapiente, quis quod impedit! Consequatur doloribus, nesciunt ex ratione aperiam nulla pariatur quibusdam suscipit? Dolore dolor molestias tempora natus.
                </Posts>
                <Posts subtitle="cinema" title="Os 10 filmes com maior bilheteria">
                    3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa mollitia sapiente, quis quod impedit! Consequatur doloribus, nesciunt ex ratione aperiam nulla pariatur quibusdam suscipit? Dolore dolor molestias tempora natus.
                </Posts>
            </div>
        </section>
    )
}

export default Articles;