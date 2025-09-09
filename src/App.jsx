import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/autonomi_logo_white.png" alt="Autonomi Logo" className="nav-logo-img" />
          </div>
          <ul className="nav-menu">
            <li><a href="#problem">The Problem</a></li>
            <li><a href="#solution">How It Works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact" className="nav-cta">Get Started</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="header">
        <div className="header-content">
          <h1>Your revenue team drops 30% of critical follow-ups.</h1>
          <div className="subtitle">The other 70% takes so long, you're turning away new business.</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <h2>Introducing Operator</h2>
          <div className="tagline">
            The AI-powered operations layer that handles your entire revenue workflow - so you can finally handle your entire pipeline.<br /><br />
            Stop choosing which deals to pursue based on capacity. Stop working nights to keep up with demand. Stop chasing down the same documents for the fifth time. <strong>Operator handles the operations so you can handle the growth.</strong>
          </div>
        </section>

        {/* Pain Points Section */}
        <section id="problem" className="section pain-points">
          <h3>
            The Hidden Growth Bottleneck
          </h3>
          <strong>You're leaving deals on the table because:</strong>
          <ul>
            <li>Complex onboarding requires 15+ back-and-forth emails per client</li>
            <li>Document collection and compliance checks eat up entire days</li>
            <li>Your team is at capacity - but demand isn't</li>
            <li>Effective lead research takes 10+ minutes per prospect</li>
            <li>Every additional deal means working nights and weekends</li>
          </ul>
          <div className="brutal-reality">
            The brutal reality: You're choosing which revenue to pursue based on operational capacity, not market opportunity
          </div>
        </section>

        {/* How It Works Section */}
        <section id="solution" className="section">
          <h3>
            How Operator Works
          </h3>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Connect</h4>
                <p>We integrate with your email, CRM, and document systems</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Automate</h4>
                <p>Complex onboarding sequences with 15+ touchpoints • Document collection and compliance follow-ups • Lead research and enrichment • Response drafting with context</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Review</h4>
                <p>Check tomorrow's scheduled messages, edit anything, approve with one click</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Document</h4>
                <p>Everything syncs to your CRM automatically - every email, every touchpoint, every document collected</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Scale</h4>
                <p>Handle 2-3x more deals with the same team - no nights, no weekends, no burnout</p>
              </div>
            </div>
          </div>
        </section>

        {/* Operations Center Section */}
        <section id="features" className="section operations-center">
          <h3>
            Your Revenue Operations Center
          </h3>
          <div className="dashboard-preview">
            <h4>Operator Central - Your command center:</h4>
            <ul>
              <li>See all your leads with automated research</li>
              <li>Review and edit scheduled follow-ups before they send</li>
              <li>Track every conversation across your team</li>
              <li>Monitor real-time pipeline health</li>
            </ul>
          </div>
          <div className="dashboard-preview">
            <h4>Plus operator@yourcompany.com - Your AI team member:</h4>
            <div className="email-interface">
              To: operator@yourcompany.com<br />
              Subject: Quick question<br /><br />
              &gt; "What's pending with Acme Corp?"<br />
              &gt; "Which deals haven't we touched this week?"<br />
              &gt; "Draft a response to Microsoft's contract question"
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section pricing">
          <h3 style={{ color: 'white', justifyContent: 'center' }}>Simple Pricing, Immediate Capacity</h3>
          <div className="price-tag">
            $2,500<span className="period">/month</span>
          </div>
          <ul className="pricing-features">
            <li>Monitor up to 5 critical inboxes</li>
            <li>Automated lead research & enrichment</li>
            <li>Unlimited follow-ups & document requests</li>
            <li>Full operations center dashboard</li>
            <li>operator@ inbox for human communication</li>
          </ul>
          <div className="roi-statement">
            The math is simple: Handle 2-3x more deals without hiring anyone
          </div>
        </section>

        {/* Who's Using Section */}
        <section className="section">
          <h3>
            Who's Using Operator
          </h3>
          <p><strong>Perfect for B2B companies with:</strong></p>
          <ul className="checklist">
            <li>More demand than operational capacity</li>
            <li>Complex onboarding or compliance requirements</li>
            <li>Multi-touch sales cycles with heavy documentation</li>
            <li>$3M-20M in annual revenue</li>
            <li>10-50 person revenue teams</li>
          </ul>
          <p className="highlight">
            <strong>Especially powerful for:</strong> Payment processors, financial services, healthcare tech, and other regulated industries where every deal requires extensive back-and-forth
          </p>
        </section>

        {/* Comparison Section */}
        <section className="section">
          <h3>
            What We Handle vs. What You Own
          </h3>
          <div className="comparison">
            <div className="comparison-column operator">
              <h4>Operator Handles (Operations)</h4>
              <ul>
                <li>Complex onboarding sequences</li>
                <li>Document collection & compliance tracking</li>
                <li>Multi-step follow-up workflows</li>
                <li>Lead research & enrichment</li>
                <li>CRM documentation & updates</li>
                <li>Response drafting with context</li>
              </ul>
            </div>
            <div className="comparison-column you">
              <h4>You Still Control (Strategy)</h4>
              <ul>
                <li>Your messaging & positioning</li>
                <li>Target market selection</li>
                <li>Pricing & negotiation</li>
                <li>Final approval decisions</li>
                <li>Strategic relationships</li>
              </ul>
            </div>
          </div>
          <p className="comparison-tagline">
            We multiply your capacity, not change your strategy
          </p>
        </section>

        {/* Testimonial */}
        <section className="testimonial">
          <p>"We've closed about a dozen new deals in the last 8 weeks we wouldn't have ever gotten to. Operator paid for itself in about 2 months for us."</p>
          <div className="author">— Chief Revenue Officer, $12M ARR CPG Company</div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="section demo-cta">
          <h3>Ready to Stop Saying No to Revenue?</h3>
          <p>Book a 15-minute demo. We'll show you how to handle every qualified lead without adding headcount.</p>
          <p className="cta-emphasis">Stop choosing which deals to pursue. Start closing them all.</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => window.open('https://calendly.com/get_autonomi/free_report', '_blank')}>
              Schedule Demo
            </button>
            <button className="cta-button secondary" onClick={() => window.location.href = 'mailto:issac@getautonomi.com'}>
              Email Us
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="/autonomi_mark.svg" alt="Autonomi Mark" className="footer-mark" />
        </div>
        <div className="footer-title">Operator by Autonomi</div>
        <div className="footer-tagline">Handle every deal. Not just the ones you have time for.</div>
        <div className="footer-links">
          <button className="website-button" onClick={() => window.open('https://getautonomi.com', '_blank')}>
            Visit Website
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
