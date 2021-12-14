import './styles.css';

function SearchForm(props){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    console.log(letters);
    return(
        <div className="card">
            <input type="text"/>
            <div className ="col-12"  >
                <ul id="indexButtons" className="pagination pagination-split">
                    {
                        letters.map(letra => (
                            <li key={letra} onClick={
                                (event)=>{
                                    props.getUser(`${letra}`)
                                     console.log(event);
                                }} >{letra}</li>
                            ))
                    }                    
                </ul>
            </div>
        </div>
    )
};

export default SearchForm; 