import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
			<div>
				<h1>Installation</h1>
				<p>
					If you want to mess with tools in your <b>own</b> server (cepi.world is the main instance),
					you can boot up your own instance:
				</p>
				<p>
					Shell (Mac, Linux):
					<br />
					<code>
						curl -fsSL https://raw.githubusercontent.com/Project-Cepi/localhost/main/install.sh | sh
					</code>
				</p>
				<br/>
				<p>
					Powershell (Windows):
					<br />
					<code>
						iwr "https://raw.githubusercontent.com/Project-Cepi/localhost/main/install.ps1" | iex
					</code>
				</p>
			</div>
        </div>
      </div>
    </section>
  );
}
