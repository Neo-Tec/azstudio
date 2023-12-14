interface SkillProps {
  skill_name: string;
  skill_percentage: number;
}

export function Skill({ skill_name, skill_percentage }: SkillProps) {
  return (
    <div className="col-md-6 animate-box">
      <div className="progress-wrap ftco-animate">
        <h3>{skill_name}</h3>
        <div className="progress">
          <div
            className="progress-bar color-1"
            role="progressbar"
            aria-valuenow={skill_percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: `${skill_percentage}%` }}
          >
            <span>{skill_percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
