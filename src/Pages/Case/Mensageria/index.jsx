import styles from './Mensageria.module.scss';
export default function Mensageria() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src='#' alt='Mensageria Banner' />
        <h1 className={styles.wrapper__title}>
          Automated messages via Whatsapp
        </h1>
        <div className={styles.wrapper__intro}>
          <div className={styles.wrapper__intro_container}>
            <div className={styles.wrapper__tags}>
              <h2 className={styles.wrapper__tags_tag}>Summary</h2>
            </div>
            <p className={styles.wrapper__text}>
              The project focuses on advancing communication for beauty
              establishments by offering automated messaging services through
              WhatsApp, using Salão 99 platform. This approach significantly
              improves customer relations and modernizes the way salons interact
              with their clients.
            </p>
          </div>
          <div className={styles.wrapper__intro_container}>
            <div className={styles.wrapper__tags}>
              <h2 className={styles.wrapper__tags_tag}>Role</h2>
            </div>
            <p className={styles.wrapper__text}>Product Designer</p>
          </div>
          <div className={styles.wrapper__intro_container}>
            <div className={styles.wrapper__tags}>
              <h2 className={styles.wrapper__tags_tag}>Platforms</h2>
            </div>
            <div className={styles.wrapper__platforms_container}>
              <p className={styles.wrapper__text}>Web</p>
              <p className={styles.wrapper__text}>Mobile</p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper__container}>
          <nav className={styles.wrapper__container_sidebar}>
            <ul>
              <li>Challenge</li>
              <li>Research</li>
              <li>Defining</li>
              <li>Ideation</li>
              <li>Concept</li>
              <li>Result</li>
              <li>Back to top</li>
            </ul>
          </nav>
          <div className={styles.wrapper__container_content}>
            <section>
              <h2>Challenge</h2>
              <h3>Identifying the Problem</h3>
              <p>
                In the dynamic world of beauty salons, effective communication
                with clients is crucial. Salons face a significant challenge:
                the manual and time-consuming process of sending appointment
                reminders via WhatsApp. This traditional method is prone to
                errors and forgetfulness, leading to no-shows which negatively
                impact the salon's revenue and operational efficiency.
              </p>
              <h3>The Need for an Innovative Solution</h3>
              <p>
                The need was clear: a solution that would automate
                communication, ensuring clients received timely and personalized
                reminders, and at the same time, be user-friendly for salon
                professionals. This challenge presented a unique opportunity to
                explore how UX can transform a routine task into a more
                efficient and enjoyable experience for both salons and their
                clients.
              </p>
            </section>
            <section>
              <h2>Research</h2>
              <h3>Methodological Approach</h3>
              <ol type='1'>
                <li>
                  Quantitative Survey: Conducting an online survey with salon
                  owners and beauty professionals to gather quantitative data on
                  their communication habits and challenges faced.
                </li>
                <li>
                  Qualitative Interviews: In-depth interviews with a
                  representative selection of salon professionals to understand
                  their experiences, needs, and expectations regarding a
                  messaging solution.
                </li>
              </ol>
              <h3>Key Insights</h3>
              <h4>The insights gathered revealed:</h4>
              <ul>
                <li>
                  Preference for WhatsApp: An overwhelming majority of salons
                  preferred using WhatsApp as their primary communication
                  channel with clients.
                </li>
                <li>
                  Frustrations with Manual Process: Many expressed frustration
                  with the time and effort required to send reminders manually.
                </li>
                <li>
                  Interest in Automation: There was a clear interest in an
                  automated solution that could manage communications
                  efficiently and in a personalized manner.
                </li>
              </ul>
              <h3>Data Analysis and Conclusions</h3>
              <p>
                The analysis of the collected data helped to formulate a
                detailed understanding of the problem and to shape the direction
                of the solution design. It became evident that a successful
                solution would need to be intuitive, easily integrable into the
                existing workflows of salons, and capable of offering
                personalized, automated communication.
              </p>
              <img src='' alt='' />
            </section>
            <section>
              <h2>Defining</h2>
              <h3>Problem Definition</h3>
              <p>
                Building on the insights from our research, we defined the core
                problem: Salon professionals need an efficient way to manage
                client communication, particularly for appointment reminders,
                without investing excessive time or encountering the risks of
                manual errors. The goal was to create a solution that enhances
                client engagement while streamlining salon operations.
              </p>
              <h3>Setting Objectives</h3>
              <p>
                The primary objective was to develop a WhatsApp automation tool
                that:
              </p>
              <ul>
                <li>
                  Reduces No-Shows: Significantly cut down the rate of missed
                  appointments.
                </li>
                <li>
                  Saves Time: Free up valuable time for salon professionals that
                  was previously spent on manual messaging.
                </li>
                <li>
                  Enhances Client Experience: Provide a more reliable and
                  personalized communication channel for clients.
                </li>
              </ul>
              <h3>Defining User Needs</h3>
              <p>Through our research, we identified the key user needs:</p>
              <ul>
                <li>
                  Ease of Use: The tool must be intuitive and straightforward
                  for salon staff with varying levels of tech-savviness.
                </li>
                <li>
                  Customization: Ability to personalize messages to maintain the
                  unique voice of each salon.
                </li>
                <li>
                  Reliability: A robust system that salon owners can rely on for
                  consistent communication.
                </li>
              </ul>
              <img src='' alt='' />
            </section>
            <section>
              <h2>Ideation</h2>
              <h3>Brainstorming Sessions</h3>
              <p>
                We conducted brainstorming sessions with UX designers,
                developers, and stakeholders, generating a wide range of ideas.
                Key themes included automation algorithms, user interface
                design, and integration with existing salon management software.
              </p>
              <h3>Concept Development</h3>
              <p>From these ideas, we developed several concepts:</p>
              <ol>
                <li>
                  Automated Reminder System: A system that automatically sends
                  appointment reminders 24 hours before the scheduled time.
                </li>
                <li>
                  Birthday and Special Occasion Messages: Personalized greetings
                  for clients on special occasions, enhancing client
                  relationships.
                </li>
                <li>
                  Feedback and Follow-up Messages: Post-appointment messages to
                  gather feedback and encourage future bookings.
                </li>
              </ol>
              <h3>Prototype Sketches and Wireframes</h3>
              <p>
                We created initial sketches and wireframes for the proposed
                features. These included:
              </p>
              <ul>
                <li>
                  Dashboard: For salon owners to set up and manage automated
                  messages.
                </li>
                <li>
                  Template Editor: Allowing customization of message templates.
                </li>
                <li>
                  Analytics Panel: To track the effectiveness of the automated
                  messages in terms of client engagement and reduced no-shows.
                </li>
              </ul>
              <h3>Selection and Refinement</h3>
              <p>
                The ideas were refined based on feasibility, potential impact,
                and alignment with user needs. The automated reminder system and
                birthday messages were prioritized for the initial development
                phase, with the feedback system planned for a later update.
              </p>
            </section>
            <section>
              <h2>Concept</h2>
            </section>
            <section>
              <h2>Result</h2>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
