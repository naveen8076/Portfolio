export default function ProjectMockup({ type }) {
  if (type === "chat") {
    return (
      <div className="mockup chat-mockup">
        <div className="mockup-topbar">
          <span>BuzzChat</span>
          <div className="avatar-dot" />
        </div>
        <div className="mockup-body">
          <div className="mockup-sidebar">
            <p className="mockup-label">CHANNELS</p>
            <p className="mockup-item active"># general</p>
            <p className="mockup-item"># random</p>
            <p className="mockup-item"># development</p>
          </div>
          <div className="mockup-chat">
            <div className="bubble">Hey everyone! How's it going?</div>
            <div className="bubble">Doing great! Working on a feature.</div>
            <div className="bubble me">Nice, can't wait to see it 🚀</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "finance") {
    return (
      <div className="mockup finance-mockup">
        <div className="mockup-topbar">
          <span>Fintelli</span>
        </div>
        <div className="mockup-stats">
          <div className="stat-box">
            <p className="mockup-label">Total Balance</p>
            <p className="stat-value">₹1,24,500</p>
          </div>
          <div className="stat-box">
            <p className="mockup-label">Expenses</p>
            <p className="stat-value down">-₹45,230</p>
          </div>
        </div>
        <div className="mockup-list">
          <p className="mockup-label">Recent Transactions</p>
          <div className="tx-row"><span>Amazon</span><span className="down">-₹2,499</span></div>
          <div className="tx-row"><span>Salary</span><span className="up">+₹45,000</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mockup listing-mockup">
      <div className="mockup-topbar">
        <span>Wanderlust</span>
      </div>
      <div className="listing-grid">
        <div className="listing-card" />
        <div className="listing-card" />
        <div className="listing-card" />
        <div className="listing-card" />
      </div>
    </div>
  );
}