const SponsorsPage = () => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-64px)] items-center justify-center py-16 px-4 gap-2">
            <h1 className="text-4xl font-bold ">Sponsors</h1>
            <p className="text-center max-w-xl text-neutral-500 text-balance">Partner with BuiltStack and reach a growing community of developers building modern web apps.</p>
            <a
                href="mailto:sponsors@builtstack.co"
                className="text-blue-600"
            >
                sponsors@builtstack.co
            </a>
        </div>
    );
}

export default SponsorsPage;