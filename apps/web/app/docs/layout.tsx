import DocumentationSidebar from "../components/documentation-sidebar";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 flex gap-2 h-[calc(100vh-52px)]">
            <DocumentationSidebar />
            <div className="overflow-y-scroll no-scrollbar max-w-2xl">
                {children}
            </div>
        </div>
    );
}

export default DocsLayout;