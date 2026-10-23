import { Defs, Node, Link, Label, Figure, useDiagramId } from "./parts";

/* ---------- ShopEase ---------- */
export function ShopEaseLayers({ caption }) {
  const id = useDiagramId();
  const rows = [
    ["Filters", "authentication · authorization", "accent"],
    ["Servlets", "routing, request/response, JSON", "base"],
    ["Services", "business rules, order lifecycle", "base"],
    ["Repositories", "queries through JPA / Hibernate 6", "base"],
    ["SQL Server 2022", "relational store", "base"],
  ];
  return (
    <Figure caption={caption} label="Backend layer diagram" minWidth={560}>
      <svg viewBox="0 0 640 360" className="dg" role="img" aria-label="Backend layers from filters down to SQL Server, with entities spanning all layers.">
        <Defs id={id} />
        {rows.map(([t, s, tone], i) => (
          <g key={t}>
            <Node x={30} y={16 + i * 68} w={460} h={46} title={t} sub={s} tone={tone} />
            {i < rows.length - 1 && <Link id={id} d={`M260 ${62 + i * 68} V ${84 + i * 68}`} />}
          </g>
        ))}
        <g className="dg-node tone-base">
          <rect x="530" y="16" width="84" height="318" rx="10" />
          <text transform="translate(572 175) rotate(90)" textAnchor="middle" className="dg-t">Entities</text>
        </g>
        <path d="M490 39 H530 M490 107 H530 M490 175 H530 M490 243 H530 M490 311 H530" className="dg-link is-dashed" fill="none" />
      </svg>
    </Figure>
  );
}

export function ShopEaseRequest({ caption }) {
  const id = useDiagramId();
  return (
    <Figure caption={caption} label="Request path diagram" minWidth={720}>
      <svg viewBox="0 0 900 250" className="dg" role="img" aria-label="A request passes the authentication filter, then the authorization filter, then servlet, service, repository and database. Failed checks reject the request.">
        <Defs id={id} />
        <Node x={10} y={78} w={92} h={50} title="Client" sub="JWT in header" />
        <Link id={id} d="M102 103 H134" />
        <Node x={136} y={78} w={128} h={50} title="JwtFilter" sub="valid token?" tone="accent" />
        <Link id={id} d="M264 103 H296" />
        <Node x={298} y={78} w={128} h={50} title="RoleGuard" sub="role allowed?" tone="accent" />
        <Link id={id} d="M426 103 H458" />
        <Node x={460} y={78} w={88} h={50} title="Servlet" />
        <Link id={id} d="M548 103 H574" />
        <Node x={576} y={78} w={88} h={50} title="Service" />
        <Link id={id} d="M664 103 H690" />
        <Node x={692} y={78} w={96} h={50} title="Repository" />
        <Link id={id} d="M788 103 H808" />
        <Node x={810} y={78} w={82} h={50} title="SQL" sub="Server" />
        <Link id={id} d="M200 128 V176" dashed flow={false} />
        <Link id={id} d="M362 128 V176" dashed flow={false} />
        <Node x={120} y={178} w={160} h={44} title="rejected" sub="not authenticated" tone="muted" small />
        <Node x={282} y={178} w={160} h={44} title="rejected" sub="role not allowed" tone="muted" small />
        <Label x={50} y={150} accent>1 identity</Label>
        <Label x={362} y={62} accent>2 permission</Label>
      </svg>
    </Figure>
  );
}

export function ShopEaseDevops({ caption }) {
  const id = useDiagramId();
  return (
    <Figure caption={caption} label="Delivery and monitoring diagram" minWidth={680}>
      <svg viewBox="0 0 860 300" className="dg" role="img" aria-label="Code is built by Jenkins, tested with JUnit and Mockito, analysed by SonarQube. The application runs in Docker Compose and is monitored by Prometheus and Grafana.">
        <Defs id={id} />
        <Label x={20} y={24} anchor="start" accent>BUILD</Label>
        <Node x={20} y={40} w={96} h={50} title="Git" sub="push" />
        <Link id={id} d="M116 65 H146" />
        <Node x={148} y={40} w={110} h={50} title="Jenkins" sub="pipeline" tone="accent" />
        <Link id={id} d="M258 65 H288" />
        <Node x={290} y={40} w={130} h={50} title="JUnit 5" sub="+ Mockito tests" />
        <Link id={id} d="M420 65 H450" />
        <Node x={452} y={40} w={120} h={50} title="SonarQube" sub="code analysis" />

        <Label x={20} y={170} anchor="start" accent>RUN &amp; OBSERVE</Label>
        <g className="dg-group"><rect x="20" y="184" width="330" height="100" rx="12" /></g>
        <Label x={34} y={202} anchor="start">Docker Compose</Label>
        <Node x={40} y={216} w={130} h={54} title="Application" sub="REST API" tone="accent" />
        <Node x={200} y={216} w={130} h={54} title="SQL Server" sub="database" />
        <Link id={id} d="M170 243 H198" />
        <Link id={id} d="M350 243 H440" flow dashed />
        <Label x={395} y={234}>scrape</Label>
        <Node x={442} y={216} w={130} h={54} title="Prometheus" sub="metrics" />
        <Link id={id} d="M572 243 H614" />
        <Node x={616} y={216} w={130} h={54} title="Grafana" sub="dashboards" tone="accent" />
      </svg>
    </Figure>
  );
}

/* ---------- SkillRadar ---------- */
export function SkillRadarPipeline({ caption }) {
  const id = useDiagramId();
  const sources = ["Arbeitnow", "Jobicy", "Remotive", "RemoteOK", "Himalayas", "HN Who's hiring", "Adzuna (key)"];
  return (
    <Figure caption={caption} label="SkillRadar planned data flow" minWidth={760}>
      <svg viewBox="0 0 1000 470" className="dg" role="img" aria-label="Planned flow: public job sources, Python ingestion adapters, Kafka topics, PostgreSQL warehouse, then ML service, Spring Boot API and Power BI, feeding Angular and Flutter apps.">
        <Defs id={id} />
        <Label x={20} y={20} anchor="start" accent>FREE SOURCES</Label>
        {sources.map((s, i) => (
          <Node key={s} x={20} y={32 + i * 58} w={140} h={42} title={s} small planned />
        ))}
        {sources.map((s, i) => <Link key={s} id={id} d={`M160 ${53 + i * 58} C 190 ${53 + i * 58}, 192 235, 214 235`} />)}

        <Node x={216} y={205} w={110} h={60} title="Ingestion" sub="Python · scheduler" planned />
        <Link id={id} d="M326 235 H 366" />

        <g className="dg-group"><rect x="368" y="86" width="190" height="298" rx="14" /></g>
        <Label x={463} y={108} accent>KAFKA</Label>
        <Node x={384} y={124} w={158} h={44} title="jobs.raw" small tone="accent" planned />
        <Link id={id} d="M463 168 V 192" />
        <Node x={384} y={194} w={158} h={44} title="jobs.clean" sub="dedup" small tone="accent" planned />
        <Link id={id} d="M463 238 V 262" />
        <Node x={384} y={264} w={158} h={44} title="jobs.enriched" sub="skills + role" small tone="accent" planned />
        <Node x={384} y={324} w={158} h={40} title="jobs.dlq" sub="rejects" small tone="muted" planned />

        <Link id={id} d="M558 235 H 598" />
        <Node x={600} y={190} w={130} h={90} title="PostgreSQL 16" sub="4 schemas" planned />

        <Link id={id} d="M730 218 C 760 218, 764 96, 790 96" />
        <Link id={id} d="M730 235 H 790" />
        <Link id={id} d="M730 252 C 760 252, 764 374, 790 374" />
        <Node x={792} y={70} w={120} h={52} title="Power BI" sub="analytics" planned />
        <Node x={792} y={209} w={120} h={52} title="Spring Boot" sub="REST · JWT" tone="accent" planned />
        <Node x={792} y={348} w={120} h={52} title="ML service" sub="FastAPI" planned />
        <Link id={id} d="M852 348 V 261" dashed />
        <Link id={id} d="M852 209 V 190 H 940 V 150" />
        <Node x={920} y={96} w={72} h={52} title="Angular" small planned />
        <Node x={920} y={30} w={72} h={52} title="Flutter" small planned />
        <Link id={id} d="M912 235 H 956 V 150" flow={false} dashed />
      </svg>
    </Figure>
  );
}

export function SkillRadarMedallion({ caption }) {
  const id = useDiagramId();
  const rows = [
    ["raw", "Bronze", "Original API responses, never edited", "written by Python ingestion"],
    ["staging", "Silver", "Cleaned, de-duplicated jobs", "written by Python stream workers"],
    ["warehouse", "Gold", "Star schema: facts, dimensions, weekly aggregates", "written by loader / dbt"],
    ["app", "Serving", "Users, skills, roadmaps", "owned by Spring Boot (Flyway)"],
  ];
  return (
    <Figure caption={caption} label="SkillRadar warehouse layers" minWidth={640}>
      <svg viewBox="0 0 760 330" className="dg" role="img" aria-label="Four PostgreSQL schemas: raw, staging, warehouse and app, with who writes each.">
        <Defs id={id} />
        {rows.map(([schema, tier, what, who], i) => (
          <g key={schema}>
            <g className={`dg-node ${i === 2 ? "tone-accent" : "tone-base"} is-planned`}>
              <rect x={20} y={14 + i * 78} width={720} height={62} rx="10" />
              <text x={40} y={40 + i * 78} className="dg-t">{schema}</text>
              <text x={40} y={60 + i * 78} className="dg-sub">{tier}</text>
              <text x={190} y={40 + i * 78} className="dg-t dg-t-sm">{what}</text>
              <text x={190} y={60 + i * 78} className="dg-sub">{who}</text>
            </g>
            {i < rows.length - 1 && <Link id={id} d={`M380 ${76 + i * 78} V ${92 + i * 78}`} />}
          </g>
        ))}
      </svg>
    </Figure>
  );
}

/* ---------- AI Academic Management System ---------- */
export function AcademicArchitecture({ caption }) {
  const id = useDiagramId();
  const roles = ["Administrator", "Director", "Professor", "Student"];
  return (
    <Figure caption={caption} label="Academic system architecture" minWidth={720}>
      <svg viewBox="0 0 900 320" className="dg" role="img" aria-label="Role dashboards call the Spring Boot API, which uses MySQL and calls a FastAPI service that hosts the prediction models and a local LLM.">
        <Defs id={id} />
        <Label x={20} y={22} anchor="start" accent>DASHBOARDS</Label>
        {roles.map((r, i) => <Node key={r} x={20} y={36 + i * 62} w={140} h={46} title={r} small />)}
        {roles.map((r, i) => <Link key={r} id={id} d={`M160 ${59 + i * 62} C 200 ${59 + i * 62}, 204 160, 240 160`} />)}
        <Node x={242} y={110} w={190} h={100} title="Spring Boot API" sub="JWT filter · controllers" tone="accent" />
        <text x="337" y="190" textAnchor="middle" className="dg-sub">services · repositories</text>
        <Link id={id} d="M432 140 C 470 140, 470 70, 508 70" />
        <Link id={id} d="M432 180 C 470 180, 470 250, 508 250" />
        <Node x={510} y={42} w={150} h={56} title="MySQL" sub="Spring Data JPA" />
        <Node x={510} y={222} w={170} h={56} title="FastAPI service" sub="/ml/* · /ai/*" tone="accent" />
        <Link id={id} d="M680 238 C 710 238, 712 190, 740 190" />
        <Link id={id} d="M680 262 C 710 262, 712 270, 740 270" />
        <Node x={742} y={162} w={140} h={56} title="Prediction models" sub="logistic regression" />
        <Node x={742} y={242} w={140} h={56} title="Ollama" sub="local LLM" />
      </svg>
    </Figure>
  );
}

/* ---------- Queue Management System ---------- */
export function QueueArchitecture({ caption }) {
  const id = useDiagramId();
  return (
    <Figure caption={caption} label="Queue system architecture" minWidth={680}>
      <svg viewBox="0 0 860 320" className="dg" role="img" aria-label="Three browser pages talk to an ESP8266 that runs the web server and the queue logic and drives an LCD. Server-sent events push updates back to the screens.">
        <Defs id={id} />
        <Label x={20} y={22} anchor="start" accent>BROWSERS</Label>
        <Node x={20} y={40} w={170} h={50} title="Take a ticket" sub="/" />
        <Node x={20} y={135} w={170} h={50} title="Counter" sub="/counter" />
        <Node x={20} y={230} w={170} h={50} title="Public screen" sub="/screen" />
        <Link id={id} d="M190 65 C 240 65, 240 130, 290 130" />
        <Link id={id} d="M190 160 H 290" />
        <Link id={id} d="M290 250 C 240 250, 240 255, 190 255" dashed />
        <Label x={236} y={246}>SSE</Label>
        <g className="dg-group"><rect x="292" y="40" width="360" height="244" rx="14" /></g>
        <Label x={472} y={62} accent>ESP8266</Label>
        <Node x={312} y={78} w={150} h={46} title="Wi-Fi" sub="access point + router" small />
        <Node x={482} y={78} w={150} h={46} title="Async web server" sub="pages · JSON API" small tone="accent" />
        <Node x={312} y={148} w={320} h={52} title="WQueue" sub="16 independent counters · A001, A002 …" tone="accent" />
        <Node x={312} y={222} w={150} h={46} title="mDNS" sub="queue.local" small />
        <Node x={482} y={222} w={150} h={46} title="LCD driver" sub="Now serving" small />
        <Link id={id} d="M652 245 H 704" />
        <Node x={706} y={205} w={134} h={80} title="16×2 LCD" sub="current ticket" />
      </svg>
    </Figure>
  );
}

export const diagramMap = {
  "exclusive-layers": ShopEaseLayers,
  "exclusive-request": ShopEaseRequest,
  "exclusive-devops": ShopEaseDevops,
  "academic-architecture": AcademicArchitecture,
  "queue-architecture": QueueArchitecture,
  "shopease-layers": ShopEaseLayers,
  "shopease-request": ShopEaseRequest,
  "shopease-devops": ShopEaseDevops,
  "skillradar-pipeline": SkillRadarPipeline,
  "skillradar-medallion": SkillRadarMedallion,
};
