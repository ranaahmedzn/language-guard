
const Instructor = ({instructor}) => {
    const {name, image} = instructor || {}

    return (
        <div className="p-5 border rounded">
            <div className="h-full text-center">
                <img alt="" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={image} />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
                <p className="text-gray-500">English Teacher</p>
                <span className="inline-block h-[5px] w-10 rounded-full bg-[#FEBC1E] mt-6"></span>
            </div>
        </div>
    );
};

export default Instructor;