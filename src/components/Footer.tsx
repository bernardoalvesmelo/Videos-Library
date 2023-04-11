export const Footer = () => {
    const year: number = new Date().getFullYear();

    return (
        <header className="footer">
            <p>Videos Library - {year}</p>
        </header>
    );
};