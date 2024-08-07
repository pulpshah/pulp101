// src/app/login/page.tsx
"use client";

import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './index.module.css';
import Google from '../assets/SocialIcons/Google.svg'
import PULPLogo from '../assets/Logo.svg'

const LogInPage: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onButtonsButtonContainerClick = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.logInPage}>
      <div className={styles.pageContents}>
        <img className={styles.backgroundOverlayIcon} alt="" src="/Background overlay.png" />
        <div className={styles.logInModule}>
          <img className={styles.backgroundPatternDecorative} alt="" src="/Background pattern decorative.svg" />
          <div className={styles.header}>
            <div className={styles.content4}>
              <div className={styles.logo}>
                <div className={styles.parent}>
                  <b className={styles.b}>101</b>
                  <img className={styles.image2Icon} alt="" src="/image 2.png" />
                </div>
              </div>
              <div className={styles.textAndSupportingText1}>
                <div className={styles.text6}>Log in to your account</div>
                <div className={styles.supportingText}>Welcome back! Please enter your details.</div>
              </div>
            </div>
            <div className={styles.paddingBottom} />
            <img className={styles.dividerIcon} alt="" src="/Divider.svg" />
          </div>
          <div className={styles.content}>
            <div className={styles.form}>
              <div className={styles.form1}>
                <div className={styles.inputField}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.label}>Email</div>
                    <div className={styles.input}>
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={styles.inputFieldElement}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.inputField}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.label}>Password</div>
                    <div className={styles.input}>
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={styles.inputFieldElement}
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.checkbox}>
                  <div className={styles.input2}>
                    <div className={styles.checkboxBase} />
                  </div>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text2}>Remember for 30 days</div>
                  </div>
                </div>
                <div className={styles.buttonsbutton}>
                  <div className={styles.text3}>Forgot password</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.content3}>
              <div className={styles.signIn}>
                <div className={styles.textPadding}>
                  <div className={styles.text4}>Sign in</div>
                </div>
              </div>
              <div className={styles.socialSignIn}>
                <div className={styles.socialButton}>
                  <img className={styles.socialIcon} alt="" src="/Social icon.svg" />
                  <div className={styles.text4}>Sign in with Google</div>
                </div>
              </div>
            </div>
            <div className={styles.dividerWrap}>
              <img className={styles.dividerIcon} alt="" src="/Divider.svg" />
            </div>
          </div>
          <div className={styles.signUp}>
            <div className={styles.text7}>Don’t have an account?</div>
            <div className={styles.signUp1}>
              <div className={styles.text3}>Sign up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
