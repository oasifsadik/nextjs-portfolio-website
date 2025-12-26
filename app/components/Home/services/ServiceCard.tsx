type Props ={
    icon: string;
    name: string;
    description: string;
}
export default function ServiceCard({icon, name, description}: Props){
    return(
        <div className="">
            <img src={icon} alt={name} height={60} width={60} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}