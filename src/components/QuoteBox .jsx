
/* Componente funcional */
const QuoteBox  = (props) => {

    return ( 
        <div>
        <div className='quote'>
            <i className="fa-solid fa-quote-left marks" style={{color: props.color}}></i>
                <p className='text-quote change-color' style={{color: props.color}}>{props.phrase}</p>
            </div>
                <div className='author change-color'>
                    <p style={{color: props.color}}>{props.author}</p>
                </div>
            </div>
    );
};

export default QuoteBox ;