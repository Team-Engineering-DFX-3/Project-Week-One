import ContainerHeader from './Header/ContainerHeader'

const Vacancies = () => {


    return (
        <div className="container shadow p-3 mb-5 bg-body rounded">
            <div className='row'>

                <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded' id='left'>
                    <div className="card vacancy">
                        <div className="card-body">
                            <div className='row'>
                                <ContainerHeader title="Card title" />
                            </div>
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </ul>
                <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded' id='right'>
                </ul>
                <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded margin-right' id='right'>
                </ul>
            </div>
        </div >
    )
}

export default Vacancies;