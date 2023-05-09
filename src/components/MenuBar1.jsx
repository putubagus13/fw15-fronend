import React from "react"
import {FiMenu} from "react-icons/fi"
import PropTypes from "prop-types"

function MenuBar1(props){
    const [hiddened, setHiddened] = React.useState("bg-white relative lg:block rounded-2xl px-[20px] md:px-0 md:bg-none md:static md:block w-[300px] md:w-[370px] md:flex-initial shadow-lg md:shadow-none hidden md:bg-[#F4F7FF]")
    function clickBtn(){
        if(hiddened === "bg-white relative lg:block rounded-2xl px-[20px] md:px-0 md:bg-none md:static md:block w-[300px] md:w-[370px] md:flex-initial shadow-lg md:shadow-none hidden md:bg-[#F4F7FF]"){
            setHiddened("bg-white absolute lg:block rounded-2xl px-[20px] md:px-0 md:bg-none md:static md:block w-[300px] md:w-[370px] md:flex-initial shadow-lg md:shadow-none md:bg-[#F4F7FF]")
        }else{
            setHiddened("bg-white relative lg:block rounded-2xl px-[20px] md:px-0 md:bg-none md:static md:block w-[300px] md:w-[370px] md:flex-initial shadow-lg md:shadow-none hidden md:bg-[#F4F7FF]")
        }
    }

    const {showMenuBarFunc} = props
    React.useEffect(()=>{
        function localShowMenuBar(newClass){
          showMenuBarFunc(newClass)
        }
        localShowMenuBar(hiddened)
    },[hiddened, showMenuBarFunc])

    return(
        <>
            <button onClick={clickBtn} className="md:hidden btn btn-square rounded-1xl btn-primary">
                <FiMenu className="text-white" size={30}/>
            </button>
        </>
        
    )
}

MenuBar1.propTypes = {
    showMenuBarFunc: PropTypes.func.isRequired,
}

export default MenuBar1