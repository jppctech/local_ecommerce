const OurServices = () => {

    const data=[
        {
            label: "Local Pickup",
            subtitle: "Get orders faster while avoiding shipping fees",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/1_92aa677c-f5a4-4aa4-a9be-25460b6b599b.jpg?crop=center&height=240&v=1658131450&width=240"
        },
        {
            label: "Local Delivery",
            subtitle: "100% curbside recycle boxes",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/2_62907fa2-21dc-450b-bee2-8c658b6b7721.jpg?crop=center&height=240&v=1658131469&width=240"
        },
        {
            label: "For Conscious Eaters",
            subtitle: "We are supporting small farmers and producers",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/3.jpg?crop=center&height=240&v=1658131916&width=240"
        },
        {
            label: "Delicious & New Food",
            subtitle: "Feel great about what you eat",
            url: "https://local-theme-light-demo.myshopify.com/cdn/shop/files/5_ceeff6e0-5ed0-4c39-9821-5d646bd14c89.jpg?crop=center&height=240&v=1658139613&width=240"
        }
    ]
    return ( 
        <div className="w-full flex py-12 gap-8 overflow-y-scroll no-scrollbar justify-evenly">
            {data.map((link)=>(
                <div key={link.label} className="flex flex-col gap-4 items-center justify-end">
                    <img
                        src={link.url}
                        className="w-40"
                    />
                    <p className="text-xl font-[500]">{link.label}</p>
                    <p className="text-sm text-gray-500">{link.subtitle}</p>
                </div>
            ))}
        </div>
     );
}
 
export default OurServices;