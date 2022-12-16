const Wrapper = ({ children }) => (
    <div className="border-1 rounded h-48 overflow-scroll my-8">{children}</div>
);

const Box = ({ name }) => (
    <Wrapper>
        <h2 className="text-2xl font-bold">{name}</h2>
        <ul className="list-disc">
            {[...Array(9).keys()].map((i) => (
                <li key={i}>
                    <a href={`#${name.toLowerCase()}${i}}`}>
                        {name} {i + 1}
                    </a>
                </li>
            ))}
        </ul>
    </Wrapper>
);

const SideBar = () => {
    return (
        <div className="sidebar">
            <Box name="Product" />
            <Box name="Manufacturer" />
            <Box name="Category" />
        </div>
    );
};

export default SideBar;
