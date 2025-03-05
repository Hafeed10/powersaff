import { useTranslation } from "react-i18next";
import { MY_REPOS_URL, WEBSITE_REPO_ID } from "src/Data/globalVariables";
import { repoStarsForksToolTipLeftPos } from "src/Functions/componentsFunctions";
import { getDataById } from "src/Functions/helper";
import useAsync from "src/Hooks/Helper/useAsync";
import s from "./RepoStarsForks.module.scss";

const RepoStarsForks = () => {
  const { t, i18n } = useTranslation();
  const [reposData, isError] = useAsync(MY_REPOS_URL);
  const websiteRepo = getDataById(reposData, WEBSITE_REPO_ID);
  const repoStars = websiteRepo?.stargazers_count;
  const repoForks = websiteRepo?.forks;
  const repoUrl = websiteRepo?.html_url;
  const leftToolTipPos = repoStarsForksToolTipLeftPos(i18n.language);

  return (
    !isError && (
      <a
        href={repoUrl}
        target="_blank"
        className={s.repoStarsForks}
        aria-label="Website's repository"
      >
      </a>
    )
  );
};
export default RepoStarsForks;
