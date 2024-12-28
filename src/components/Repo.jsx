const Repo = ({repo}) => {

    const formattedDate = new Date(repo.created_at).toLocaleString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    const formattedUpdatedDate = new Date(repo.updated_at).toLocaleDateString("ru-RU");

    return (
        <>
            <div className="work-card">
                <h3 className="work-title">{repo.full_name.split('/')[1]}</h3>
                <p className="work-created">Создан: {formattedDate}</p>
                <p className="work-updated">Последнее обновление: {formattedUpdatedDate}</p>
                <p className="work-stars">⭐ {repo.stargazers_count} звёзд</p>
                <p className="work-forks">🍴 {repo.forks_count} форков</p>
                <p className="work-language">📝 Язык: {repo.language}</p>
                <a href={repo.html_url} target='_blank' className="work-link">Подробнее...</a>
            </div>
        </>
    );
};

export default Repo;