export default function ProjectDetails({ params } : { params: { projectId: string }}) {
    return (
    <div>
        <h1>DETAILS ABOUT PROJECT {params.projectId}</h1>
    </div>
    )
}