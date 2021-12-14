import './styles.css'
import ListItem from './ListItem';

function List (props){
    return(
        <div class="col-12">
         {/* <h2>Hola tu id es: {props.list._id} tu nombre es: {props.list.full_name}</h2> */}
        {
            props.list.map(item =>(
                <ListItem key={item._id} item={item} />
                )
            )
        }
        </div>
    )
}

export default List;