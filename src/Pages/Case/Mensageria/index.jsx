import styles from './Mensageria.module.scss';
export default function Mensageria() {
  return (
    <>
      <div id='topsection' className={styles.wrapper}>
        <img
          src='assets/img/mensageria/mensageria-banner.png'
          alt='Mensageria Banner'
        />
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
            <a href='#challenge'>Challenge</a>

            <a href='#research'>Research</a>

            <a href='#defining'>Defining</a>

            <a href='#ideation'>Ideation</a>

            <a href='#concept'>Concept</a>

            <a href='#result'>Result</a>

            <a href='#topsection'>Back to top</a>
          </nav>
          <div className={styles.wrapper__container_content}>
            <section id='challenge'>
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
            <section id='research'>
              <h2>Research</h2>
              <h3>Methodological Approach</h3>
              <h4>
                The research process was comprehensive, involving multiple
                stages:
              </h4>
              <ol type='1'>
                <li>
                  <strong>Quantitative Survey:</strong> Conducting an online
                  survey with salon owners and beauty professionals to gather
                  quantitative data on their communication habits and challenges
                  faced.
                </li>
                <li>
                  <strong>Qualitative Interviews:</strong> In-depth interviews
                  with a representative selection of salon professionals to
                  understand their experiences, needs, and expectations
                  regarding a messaging solution.
                </li>
              </ol>
              <h3>Key Insights</h3>
              <h4>The insights gathered revealed:</h4>
              <ul>
                <li>
                  <strong>Preference for WhatsApp:</strong> An overwhelming
                  majority of salons preferred using WhatsApp as their primary
                  communication channel with clients.
                </li>
                <li>
                  <strong>Frustrations with Manual Process:</strong> Many
                  expressed frustration with the time and effort required to
                  send reminders manually.
                </li>
                <li>
                  <strong>Interest in Automation:</strong> There was a clear
                  interest in an automated solution that could manage
                  communications efficiently and in a personalized manner.
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
              <img src='assets/img/mensageria/challenge-img1.png' alt='' />
            </section>
            <section id='defining'>
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
              <h4>
                The primary objective was to develop a WhatsApp automation tool
                that:
              </h4>
              <ul>
                <li>
                  <strong>Reduces No-Shows:</strong> Significantly cut down the
                  rate of missed appointments.
                </li>
                <li>
                  <strong>Saves Time:</strong> Free up valuable time for salon
                  professionals that was previously spent on manual messaging.
                </li>
                <li>
                  <strong>Enhances Client Experience:</strong> Provide a more
                  reliable and personalized communication channel for clients.
                </li>
              </ul>
              <h3>Defining User Needs</h3>
              <h4>Through our research, we identified the key user needs:</h4>
              <ul>
                <li>
                  <strong>Ease of Use:</strong> The tool must be intuitive and
                  straightforward for salon staff with varying levels of
                  tech-savviness.
                </li>
                <li>
                  <strong>Customization:</strong> Ability to personalize
                  messages to maintain the unique voice of each salon.
                </li>
                <li>
                  <strong>Reliability:</strong> A robust system that salon
                  owners can rely on for consistent communication.
                </li>
              </ul>
              <img src='assets/img/mensageria/defining-img1.png' alt='' />
            </section>
            <section id='ideation'>
              <h2>Ideation</h2>
              <h3>Brainstorming Sessions</h3>
              <p>
                We conducted brainstorming sessions with UX designers,
                developers, and stakeholders, generating a wide range of ideas.
                Key themes included automation algorithms, user interface
                design, and integration with existing salon management software.
              </p>
              <h3>Concept Development</h3>
              <h4>From these ideas, we developed several concepts:</h4>
              <ol>
                <li>
                  <strong>Automated Reminder System:</strong> A system that
                  automatically sends appointment reminders 24 hours before the
                  scheduled time.
                </li>
                <li>
                  <strong>Birthday and Special Occasion Messages:</strong>{' '}
                  Personalized greetings for clients on special occasions,
                  enhancing client relationships.
                </li>
                <li>
                  <strong>Feedback and Follow-up Messages:</strong>{' '}
                  Post-appointment messages to gather feedback and encourage
                  future bookings.
                </li>
              </ol>
              <h3>Prototype Sketches and Wireframes</h3>
              <h4>
                We created initial sketches and wireframes for the proposed
                features. These included:
              </h4>
              <ul>
                <li>
                  <strong>Dashboard:</strong> For salon owners to set up and
                  manage automated messages.
                </li>
                <li>
                  <strong>Template Editor:</strong> Allowing customization of
                  message templates.
                </li>
                <li>
                  <strong>Analytics Panel:</strong> To track the effectiveness
                  of the automated messages in terms of client engagement and
                  reduced no-shows.
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
            <section id='concept'>
              <h2>Concept</h2>
              <h3>Finalizing the Solution Concept</h3>
              <h4>
                Based on our ideation and initial prototyping, we converged on a
                concept that promised to address the needs effectively. The
                final concept was a WhatsApp automation tool tailored
                specifically for beauty salons, encapsulating the following
                features:
              </h4>
              <ol>
                <li>
                  <strong>Automated Appointment Reminders:</strong> A system
                  that sends automated reminders to clients for their upcoming
                  appointments. This feature is designed to significantly reduce
                  no-shows by ensuring clients remember their appointments.
                </li>
                <li>
                  <strong>Personalized Greetings for Special Occasions:</strong>{' '}
                  The tool allows salons to send personalized messages for
                  clients' birthdays and other special occasions, fostering a
                  stronger client-salon relationship.
                </li>
                <li>
                  <strong>Customizable Templates:</strong> Salon owners can
                  customize the message templates to reflect their brand's voice
                  and tone, providing a personal touch to automated messages.
                </li>
                <li>
                  <strong>Integration with Salon Management Software:</strong>{' '}
                  The system seamlessly integrates with existing salon
                  management tools, ensuring a smooth addition to the salon's
                  workflow.
                </li>
              </ol>
              <img src='assets/img/mensageria/concept-img1.png' alt='' />
              <h3>Prototyping and User Testing</h3>
              <p>
                High-fidelity prototypes of the tool were developed, showcasing
                the user interface and demonstrating the functionality of the
                key features. These prototypes were then used in further user
                testing sessions with salon professionals to gather feedback and
                refine the concept.
              </p>
              <img src='assets/img/mensageria/concept-gif1.gif' alt='' />
            </section>
            <section id='result'>
              <h2>Result</h2>
              <h3>Implementation and Impact</h3>
              <h4>
                After multiple iterations and refinements based on user
                feedback, the WhatsApp automation tool was launched. The key
                results were:
              </h4>
              <ol>
                <li>
                  <strong>Reduction in No-Shows:</strong> Salons reported a
                  significant decrease in no-show rates, with some experiencing
                  up to a 70% reduction.
                </li>
                <li>
                  <strong>Time Efficiency:</strong> Salon staff noted a
                  substantial time saving, as they no longer needed to manually
                  send reminders or greetings.
                </li>
                <li>
                  <strong>Enhanced Client Engagement:</strong> Personalized
                  messages and timely reminders led to an increase in client
                  satisfaction and loyalty. Positive feedback from clients
                  indicated a more connected and personalized experience.
                </li>
                <li>
                  <strong>Business Growth:</strong> The tool contributed to an
                  overall increase in efficiency and customer satisfaction,
                  which in turn led to an uptick in repeat bookings and
                  referrals.
                </li>
              </ol>
              <h3>User Feedback and Future Enhancements</h3>
              <p>
                Feedback from users was overwhelmingly positive, with many
                highlighting the ease of use and effectiveness of the tool.
                Based on this feedback, future enhancements were planned,
                including more advanced customization options and integration
                with additional communication platforms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
