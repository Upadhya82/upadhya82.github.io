import React, { useState, useEffect, useRef } from 'react';
import { terminalCommands } from '../portfolioData';
import { TerminalIcon, CopyIcon, CheckCircleIcon } from './Icons';
import styles from './Terminal.module.css';

const PRESET_COMMANDS = [
  { key: 'whoami', label: 'whoami' },
  { key: 'focus', label: 'cat /etc/career-focus' },
  { key: 'status', label: 'systemctl status' },
  { key: 'stack', label: 'docker ps' },
];

export default function Terminal() {
  const [history, setHistory] = useState([
    {
      cmd: 'whoami',
      output: terminalCommands.whoami.output,
    },
    {
      cmd: 'cat /etc/career-focus',
      output: terminalCommands.focus.output,
    },
    {
      cmd: 'systemctl status engineer.service',
      output: terminalCommands.status.output,
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [activeTab, setActiveTab] = useState('whoami');
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef(null);

  const runCommand = (cmdKey) => {
    setActiveTab(cmdKey);
    const target = terminalCommands[cmdKey];
    if (target) {
      setHistory(prev => [
        ...prev,
        {
          cmd: target.command,
          output: target.output,
        },
      ]);
    }
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputVal.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'whoami') {
      runCommand('whoami');
    } else if (trimmed === 'focus' || trimmed.includes('focus')) {
      runCommand('focus');
    } else if (trimmed === 'status' || trimmed.includes('status')) {
      runCommand('status');
    } else if (trimmed === 'stack' || trimmed.includes('docker')) {
      runCommand('stack');
    } else if (trimmed === 'help') {
      setHistory(prev => [
        ...prev,
        {
          cmd: trimmed,
          output: [
            'Available commands: whoami, focus, status, stack, clear, help',
            'Or click on the quick action pills above!',
          ],
        },
      ]);
    } else {
      setHistory(prev => [
        ...prev,
        {
          cmd: trimmed,
          output: [`command not found: ${trimmed}. Try 'whoami', 'focus', 'status', or 'help'.`],
        },
      ]);
    }
    setInputVal('');
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const copyTerminalOutput = () => {
    const text = history
      .map(h => `$ ${h.cmd}\n${h.output.join('\n')}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.terminalContainer}>
      {/* Terminal Title Bar */}
      <div className={styles.topBar}>
        <div className={styles.windowControls}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>
        <div className={styles.titleInfo}>
          <TerminalIcon size={14} className={styles.termIcon} />
          <span>upadhya@cloud-node-01: ~</span>
        </div>
        <div className={styles.topActions}>
          <button
            onClick={copyTerminalOutput}
            className={styles.copyBtn}
            title="Copy terminal session"
            aria-label="Copy terminal output"
          >
            {copied ? <CheckCircleIcon size={14} /> : <CopyIcon size={14} />}
          </button>
        </div>
      </div>

      {/* Quick Command Navigation Tabs */}
      <div className={styles.commandBar}>
        <span className={styles.commandBarLabel}>Quick Actions:</span>
        <div className={styles.commandPills}>
          {PRESET_COMMANDS.map(c => (
            <button
              key={c.key}
              onClick={() => runCommand(c.key)}
              className={`${styles.cmdPill} ${activeTab === c.key ? styles.cmdPillActive : ''}`}
            >
              $ {c.label}
            </button>
          ))}
          <button
            onClick={() => setHistory([])}
            className={`${styles.cmdPill} ${styles.cmdClear}`}
          >
            clear
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className={styles.terminalBody}>
        <div className={styles.welcomeBanner}>
          <span className={styles.bannerSys}>Linux 6.8.0-cloud-amd64 #1 SMP x86_64 GNU/Linux</span>
          <span className={styles.bannerInfo}>Welcome to Upadhya's Engineering Environment. Type 'help' for options.</span>
        </div>

        {history.map((item, idx) => (
          <div key={idx} className={styles.historyBlock}>
            <div className={styles.promptLine}>
              <span className={styles.userHost}>upadhya@infra</span>
              <span className={styles.colon}>:</span>
              <span className={styles.path}>~</span>
              <span className={styles.dollar}>$</span>
              <span className={styles.executedCmd}>{item.cmd}</span>
            </div>
            <div className={styles.outputBox}>
              {item.output.map((line, lIdx) => (
                <div key={lIdx} className={styles.outputLine}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Live Input Prompt */}
        <form onSubmit={handleCustomSubmit} className={styles.inputLine}>
          <span className={styles.userHost}>upadhya@infra</span>
          <span className={styles.colon}>:</span>
          <span className={styles.path}>~</span>
          <span className={styles.dollar}>$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className={styles.termInput}
            placeholder="Type 'status' or 'stack'..."
            aria-label="Terminal command input"
          />
          <span className={styles.cursor} />
        </form>

        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
