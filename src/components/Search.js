import React , {useEffect , useState , useRef} from "react";

const Search = (props)=>{

    const[display , setDisplay] = useState(false);
    const[options , setOptions] = useState([]);
    const [search , setSearch] = useState("");
    const wrapperRef = useRef(null);
    


    useEffect(() => {
        const moviesData =[] ;
        const promises = new Array(20)
            .fill()
            .map((v,i) => fetch(''))

    })
}

export default Search;