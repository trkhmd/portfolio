const ItemProjet = (props) => {
  return (
    <div className="flex items-center rounded-lg  border-2  border-primary pl-6 mt-2 w-2/3 transition bg-transparent hover:translate-x-4">
      <img src={props.image} alt={props.title} className="w-16 h-16" />
      <div className="px-6 py-4 hover:text-primary">
        <a className="block mt-2 font-bold text-lg  leading-tight">
          {props.title}
        </a>
        <p className="mt-2 text-gray-400">
        {props.description}</p>
      </div>
    </div>
  );
};

export default ItemProjet;
