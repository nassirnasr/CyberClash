
var scenarios = [
  {
    hackerCard : {
      description : "You received an email from a well-known company, but its name is misspelt in the sender's address, you should:-",
      power : 4,
    },
    playerCards : [
      {
        description : "Click on the link in the email to check if it is genuine.",
        power : 2,
      },
      {
        description : "Delete the email and report it as spam.",
        power : 6,
      },
      {
        description : "Forward the email to a friend to check if it is genuine.",
        power : 3,
      }
    ]
  },
  {
    hackerCard : {
      description : "I set up a fake Wi-Fi station to steal people's email and track them online.",
      power : 4,
    },
    playerCards : [
      {
        description : "I browse the web, but I never do any personal business on a public wifi network.",
        power : 3,
      },
      {
        description : "I connect to any wifi network I can use in public.",
        power : 1,
      },
      {
        description : "I never use public wifi networks.",
        power : 5,
      }
    ]
  },
  {
    hackerCard : {
      description : "Which of these is a sign of malware on your computer?",
      power : 3,
    },
    playerCards : [
      {
        description : "You received a fraudulent email and your browser alerts it has blocked a pop-up window.",
        power : 2,
      },
      {
        description : "Your browser alerts you to update to a newer version.",
        power : 1,
      },
      {
        description : "Your homepage has changed unexpectedly.",
        power : 5,
      }
    ]
  },
  {
    hackerCard : {
      description : "I attempt to gain access to your accounts by bypassing two-factor authentication.",
      power : 3,
    },
    playerCards : [
      {
        description : "I disable two-factor authentication on all my accounts to avoid the inconvenience.",
        power : 2,
      },
      {
        description : "I use authentication apps rather than relying solely on SMS-based 2FA.",
        power : 4,
      },
      {
        description : "I share my 2FA codes with friends or family for easy account access.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent a fake email from your bank asking for your account details.",
      power : 3,
    },
    playerCards : [
      {
        description : "I checked the email address - the message didn't come from my bank.",
        power : 5,
      },
      {
        description : "I never give out personal information in response to an email.",
        power : 4,
      },
      {
        description : "I sent the details you asked for so you could check on my account.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "What should you do when choosing a password?",
      power : 3,
    },
    playerCards : [
      {
        description : "Use a combination of letters and numbers that mean something to you but no one else",
        power : 5,
      },
      {
        description : "Use something easy to remember like your pet's name.",
        power : 1,
      },
      {
        description : "Save all your passwords in a file on your computer in case you forget one.",
        power : 2,
      }
    ]
  },
  {
    hackerCard : {
      description : "What should you do if you accidentally click on a suspicious link?",
      power : 2,
    },
    playerCards : [
      {
        description : "Share the link with friends to warn them.",
        power : 1,
      },
      {
        description : "Close the window or tab immediately.",
        power : 3,
      },
      {
        description : "Reload the website.",
        power : 0,
      }
    ]
  },
  {
    hackerCard : {
      description : "You got urgent email from financial institution requesting your login credentials due to security breach.",
      power : 3,
    },
    playerCards : [
      {
        description : "I ignore the email without checking its legitimacy.",
        power : 2,
      },
      {
        description : "I immediately click on the link in the email to update my credentials.",
        power : 1,
      },
      {
        description : "I contact the institution through their official website or phone no. to verify the email's legitimacy.",
        power : 4,
      }
    ]
  },
  {
    hackerCard : {
      description : "I figured out where you live from all the personal information you share on social media.",
      power : 3,
    },
    playerCards : [
      {
        description : "I never share personal information on my social media accounts.",
        power : 4,
      },
      {
        description : "I keep my accounts private so only my friends can see them.",
        power : 3,
      },
      {
        description : "I tag everything so my friends always know what I'm doing.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent you a link to a website that looks like your bank's website, but actually it's fraudulent.",
      power : 3,
    },
    playerCards : [
      {
        description : "I click on links in emails if they look like they're from my bank.",
        power : 1,
      },
      {
        description : "I click on the links to see if it genuine.",
        power : 2,
      },
      {
        description : "I never click on links in emails. I always type the address in myself.",
        power : 4,
      }
    ]
  },
  {
    hackerCard : {
      description : "I watched you type your password and hacked your account.",
      power : 2,
    },
    playerCards : [
      {
        description : "I changed my password on all of my accounts because they are the same.",
        power : 2,
      },
      {
        description : "I use different passwords for all of my other accounts.",
        power : 4,
      },
      {
        description : "I deleted that account and started a new one. ",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I impersonate a colleague and request sensitive information from you.",
      power : 3,
    },
    playerCards : [
      {
        description : "I call my colleague to verify the request.",
        power : 5,
      },
      {
        description : "I discuss with my supervisor before sharing the information.",
        power : 4,
      },
      {
        description : "I question the request but still share the information via email without verification.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I looked at your browsing history on your phone to see what you do online.",
      power : 2,
    },
    playerCards : [
      {
        description : "I set my browser to delete my history every time I quit. ",
        power : 3,
      },
      {
        description : "I never clear my browser history because I don't like typing in big web addresses.",
        power : 1,
      },
      {
        description : "I always use a private browser that never keeps my history.",
        power : 4,
      }
    ]
  }, 
  {
    hackerCard : {
      description : "I attempt to crack your account password using commonly used passwords and dictionary words.",
      power : 3,
    },
    playerCards : [
      {
        description : "I write down all my passwords on a sticky note attached to my computer.",
        power : 1,
      },
      {
        description : "I use a reputable password manager to generate and store strong, unique passwords.",
        power : 4,
      },
      {
        description : "I use a single complex password for all of my online accounts for simplicity.",
        power : 2,
      }
    ]
  },
  {
    hackerCard : {
      description : "I hacked your system and all your data is deleted now.",
      power : 2,
    },
    playerCards : [
      {
        description : "I have my data backed up in local and external hard drive.",
        power : 3,
      },
      {
        description : "I never backed up my data in any way.",
        power : 1,
      },
      {
        description : "I follow the 3-2-1 backup rule. I have on-site as well as off-site location (cloud storage) backup.",
        power : 4,
      },
    ]
  }, 
  {
    hackerCard : {
      description : "What does a Phishing email contain?",
      power : 2,
    },
    playerCards : [
      {
        description : "It offers you products in which you may have no interest.",
        power : 0,
      },
      {
        description : "Requests a payment for goods you have not received.",
        power : 1,
      },
      {
        description : "It encourages you to click on a link to a fraudulent website.",
        power : 3,
      }
    ]
  },
  {
    hackerCard : {
      description : "Someone sends you a message threatening they are going to kill you. What do you do?",
      power : 2,
    },
    playerCards : [
      {
        description : "Threaten him back.",
        power : 1,
      },
      {
        description : "Report it to the Police.",
        power : 3,
      },
      {
        description : "Ignore and Delete the message.",
        power : 0,
      }
    ]
  },
  {
    hackerCard : {
      description : "Which of the following passwords is the most secure?",
      power : 3,
    },
    playerCards : [
      {
        description : "Boat1234",
        power : 1,
      },
      {
        description : "into*488",
        power : 2,
      },
      {
        description : "W.Th!5$Z",
        power : 4,
      }
    ]
  },
  {
    hackerCard : {
      description : "I provided you my USB for content transfer.",
      power : 2,
    },
    playerCards : [
      {
        description : "I refused to use your USB as my system was not having Anti-Virus Protection & Firewall.",
        power : 2,
      },
      {
        description : "I use Anti-Virus Protection & Firewall to protect my system.",
        power : 3,
      },
      {
        description : "I used your USB as I am not afraid of my system getting corrupted.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I will crash your vulnerable system using ransomware attacks, malware and data breaches.",
      power : 2,
    },
    playerCards : [
      {
        description : "I don't update my softwares nor do I download security updates.",
        power : 1,
      },
      {
        description : "You can't because I have turned on Automatic Updates for my operating system.",
        power : 3,
      },
      {
        description : "I use web browsers such as Chrome or Firefox that receive frequent, automatic security updates.",
        power : 3,
      }
    ]
  },
    {
      hackerCard : {
        description : "I tried to steal your credit card information by installing a skimming device on a gas pump.",
        power : 3,
      },
      playerCards : [
        {
          description : "I always check for any signs of tampering before inserting my credit card into a card reader.",
          power : 4,
        },
        {
          description : "I use my credit card at any gas station without checking the card reader.",
          power : 2,
        },
        {
          description : "I pay cash for my gas to avoid using my credit card at all.",
          power : 1,
        }
      ]
    },
    {
      hackerCard : {
        description : "I intercepted your unencrypted Wi-Fi traffic and stole your login credentials.",
        power : 3,
      },
      playerCards : [
        {
          description : "I always use a VPN when accessing sensitive information over public Wi-Fi networks.",
          power : 5,
        },
        {
          description : "I connect to public Wi-Fi networks without using any security measures.",
          power : 1,
        },
        {
          description : "I never use public Wi-Fi networks, only my home network.",
          power : 3,
        }
      ]
    },
    {
      hackerCard : {
        description : "I gained access to your email by guessing your password using common words and numbers.",
        power : 2,
      },
      playerCards : [
        {
          description : "I use a password that combines uppercase, lowercase letters, numbers, and special characters.",
          power : 4,
        },
        {
          description : "I use simple passwords like 'password123' for all my accounts.",
          power : 1,
        },
        {
          description : "I change my password only when prompted by the system.",
          power : 2,
        }
      ]
    },
    {
      hackerCard : {
        description : "I tricked you into installing ransomware on your computer through a phishing email attachment.",
        power : 4,
      },
      playerCards : [
        {
          description : "I never open email attachments from unknown or suspicious sources.",
          power : 5,
        },
        {
          description : "I open email attachments without checking their source or content.",
          power : 1,
        },
        {
          description : "I forward suspicious email attachments to others for investigation.",
          power : 3,
        }
      ]
    },
    {
      hackerCard : {
        description : "I exploited a vulnerability in your smartphone's operating system to gain remote access.",
        power : 3,
      },
      playerCards : [
        {
          description : "I regularly update my smartphone's operating system and apps.",
          power : 4,
        },
        {
          description : "I disable automatic updates on my smartphone to save data.",
          power : 2,
        },
        {
          description : "I never update my smartphone's operating system or apps.",
          power : 1,
        }
      ]
    },

  
      {
        hackerCard : {
          description : "I hacked into your social media account by guessing your password.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use a different, strong password for each of my social media accounts.",
            power : 4,
          },
          {
            description : "I use simple passwords that are easy to remember for all my accounts.",
            power : 1,
          },
          {
            description : "I change my passwords only when prompted by the system.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I installed spyware on your computer to monitor your online activities.",
          power : 3,
        },
        playerCards : [
          {
            description : "I regularly scan my computer for malware and remove any suspicious programs.",
            power : 5,
          },
          {
            description : "I download and install software from untrusted sources without checking for malware.",
            power : 1,
          },
          {
            description : "I never scan my computer for malware as I believe it is unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your identity and opened credit accounts in your name.",
          power : 4,
        },
        playerCards : [
          {
            description : "I monitor my credit report regularly for any unauthorized accounts or transactions.",
            power : 5,
          },
          {
            description : "I share my personal information freely on social media without considering the consequences.",
            power : 1,
          },
          {
            description : "I never check my credit report as I don't think it's important.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your company's confidential information through a phishing email sent to your work email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I report suspicious emails to my company's IT department and never open attachments or click on links.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to my colleagues without consulting IT.",
            power : 3,
          },
          {
            description : "I open emails and attachments from unknown sources out of curiosity.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I remotely accessed your smart home devices and turned them off.",
          power : 3,
        },
        playerCards : [
          {
            description : "I secure my smart home devices with strong, unique passwords and enable two-factor authentication if available.",
            power : 5,
          },
          {
            description : "I use default passwords for my smart home devices as I find them convenient.",
            power : 1,
          },
          {
            description : "I don't use smart home devices, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I tricked you into revealing your personal information by impersonating a trusted friend or family member online.",
          power : 3,
        },
        playerCards : [
          {
            description : "I verify the identity of people online before sharing personal information.",
            power : 4,
          },
          {
            description : "I share personal information online without verifying the recipient's identity.",
            power : 2,
          },
          {
            description : "I believe that everyone online is trustworthy, so I freely share personal information.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I intercepted your mobile banking transactions using a fake Wi-Fi network.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only conduct mobile banking transactions on secure, trusted networks.",
            power : 5,
          },
          {
            description : "I use public Wi-Fi networks for mobile banking without using a VPN or other security measures.",
            power : 1,
          },
          {
            description : "I never use mobile banking as I don't trust online transactions.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I installed keylogging software on your computer to capture your keystrokes and steal passwords.",
          power : 3,
        },
        playerCards : [
          {
            description : "I use anti-keylogging software and regularly update my antivirus protection.",
            power : 5,
          },
          {
            description : "I disable antivirus software because it slows down my computer.",
            power : 1,
          },
          {
            description : "I don't believe keyloggers are a real threat, so I don't take any precautions.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by using information obtained from your social media profiles.",
          power : 2,
        },
        playerCards : [
          {
            description : "I regularly review my social media privacy settings and limit the information I share publicly.",
            power : 4,
          },
          {
            description : "I share personal information on social media without considering privacy settings.",
            power : 1,
          },
          {
            description : "I don't use social media, so I don't have to worry about privacy settings.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I compromised your online accounts by exploiting weak security questions and answers.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use strong security questions and answers that are difficult for others to guess or find online.",
            power : 4,
          },
          {
            description : "I use common security questions and answers that are easy for me to remember.",
            power : 1,
          },
          {
            description : "I don't use security questions on my online accounts because I find them inconvenient.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I hijacked your webcam and recorded your activities without your knowledge.",
          power : 3,
        },
        playerCards : [
          {
            description : "I cover my webcam with a sticker or physical cover when not in use.",
            power : 5,
          },
          {
            description : "I leave my webcam uncovered and connected at all times.",
            power : 1,
          },
          {
            description : "I don't use webcams, so I don't have to worry about privacy concerns.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your email credentials by tricking you into entering them on a fake login page.",
          power : 3,
        },
        playerCards : [
          {
            description : "I always check the URL and SSL certificate before entering login credentials on a website.",
            power : 5,
          },
          {
            description : "I enter login credentials on any website that looks legitimate without verifying its authenticity.",
            power : 1,
          },
          {
            description : "I don't use email or online accounts, so I don't have to worry about phishing attacks.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I compromised your online shopping account and made unauthorized purchases.",
          power : 3,
        },
        playerCards : [
          {
            description : "I enable two-factor authentication on my online shopping accounts for added security.",
            power : 5,
          },
          {
            description : "I share my online shopping account credentials with family members or friends for convenience.",
            power : 1,
          },
          {
            description : "I don't shop online, so I don't have to worry about account security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your cloud storage account and deleted all your files.",
          power : 4,
        },
        playerCards : [
          {
            description : "I use strong, unique passwords and enable two-factor authentication on my cloud storage accounts.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts, including cloud storage.",
            power : 1,
          },
          {
            description : "I don't use cloud storage, so I don't have to worry about account security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I used social engineering tactics to convince you to share your banking PIN over the phone.",
          power : 3,
        },
        playerCards : [
          {
            description : "I never share sensitive information like banking PINs over the phone, even if the caller seems legitimate.",
            power : 5,
          },
          {
            description : "I share sensitive information over the phone without verifying the caller's identity.",
            power : 1,
          },
          {
            description : "I don't use banking services that require PINs, so I don't have to worry about phone scams.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by guessing your security questions.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use security questions with answers that are difficult for others to guess or find online.",
            power : 4,
          },
          {
            description : "I use common security questions with answers that are easy for me to remember.",
            power : 1,
          },
          {
            description : "I don't use security questions on my online accounts because I find them unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I used a USB drive infected with malware to gain access to your computer.",
          power : 3,
        },
        playerCards : [
          {
            description : "I never plug in USB drives from unknown or untrusted sources into my computer.",
            power : 5,
          },
          {
            description : "I plug in USB drives from anyone without considering the potential security risks.",
            power : 1,
          },
          {
            description : "I don't use USB drives, so I don't have to worry about malware infections.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by using a dictionary attack to guess your password.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use a password manager to generate and store strong, unique passwords for all my accounts.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts.",
            power : 1,
          },
          {
            description : "I don't use passwords for my accounts, so I don't have to worry about password security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your social media account by exploiting a vulnerability in the platform.",
          power : 3,
        },
        playerCards : [
          {
            description : "I enable two-factor authentication on my social media accounts for added security.",
            power : 5,
          },
          {
            description : "I disable security features on my social media accounts to make logging in easier.",
            power : 1,
          },
          {
            description : "I don't use social media, so I don't have to worry about account security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your smartphone through a malicious app you downloaded.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only download apps from trusted sources like official app stores and read reviews before downloading.",
            power : 5,
          },
          {
            description : "I download apps from any website without checking their legitimacy.",
            power : 1,
          },
          {
            description : "I don't use smartphones or download apps, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your online banking account through a phishing email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account through brute force attacks.",
          power : 3,
        },
        playerCards : [
          {
            description : "I use complex passwords that combine uppercase, lowercase letters, numbers, and symbols.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts.",
            power : 1,
          },
          {
            description : "I don't use passwords for my accounts, so I don't have to worry about password security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account through a phishing email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your credit card information by installing a skimming device on an ATM.",
          power : 3,
        },
        playerCards : [
          {
            description : "I always check for any signs of tampering before using an ATM.",
            power : 4,
          },
          {
            description : "I use any ATM without checking for signs of tampering.",
            power : 2,
          },
          {
            description : "I avoid using ATMs altogether.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your computer by exploiting a vulnerability in outdated software.",
          power : 3,
        },
        playerCards : [
          {
            description : "I regularly update my software to patch security vulnerabilities.",
            power : 5,
          },
          {
            description : "I ignore software updates because they are inconvenient.",
            power : 1,
          },
          {
            description : "I don't use computers, so I don't have to worry about software vulnerabilities.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your smartphone through a fake app that stole your data.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only download apps from official app stores and check permissions before installing.",
            power : 5,
          },
          {
            description : "I download apps from any website without verifying their authenticity.",
            power : 1,
          },
          {
            description : "I don't use smartphones or download apps, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your online accounts by guessing your security questions.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use unique security questions with answers that are not easily guessed or found online.",
            power : 4,
          },
          {
            description : "I use common security questions with answers that are easy for me to remember.",
            power : 1,
          },
          {
            description : "I don't use security questions on my accounts because I find them unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your social media account through a phishing email.",
          power : 3,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your cloud storage account by guessing your password.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use a password manager to generate and store strong, unique passwords for all my accounts.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts.",
            power : 1,
          },
          {
            description : "I don't use passwords for my accounts, so I don't have to worry about password security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I intercepted your email credentials by monitoring unencrypted public Wi-Fi networks.",
          power : 3,
        },
        playerCards : [
          {
            description : "I always use a VPN when accessing sensitive information over public Wi-Fi networks.",
            power : 5,
          },
          {
            description : "I connect to public Wi-Fi networks without using any security measures.",
            power : 1,
          },
          {
            description : "I never use public Wi-Fi networks, only my home network.",
            power : 3,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account through a phishing email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I installed spyware on your computer to monitor your online activities.",
          power : 3,
        },
        playerCards : [
          {
            description : "I regularly scan my computer for malware and remove any suspicious programs.",
            power : 5,
          },
          {
            description : "I download and install software from untrusted sources without checking for malware.",
            power : 1,
          },
          {
            description : "I never scan my computer for malware as I believe it is unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your identity and opened credit accounts in your name.",
          power : 4,
        },
        playerCards : [
          {
            description : "I monitor my credit report regularly for any unauthorized accounts or transactions.",
            power : 5,
          },
          {
            description : "I share my personal information freely on social media without considering the consequences.",
            power : 1,
          },
          {
            description : "I never check my credit report as I don't think it's important.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your company's confidential information through a phishing email sent to your work email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I report suspicious emails to my company's IT department and never open attachments or click on links.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to my colleagues without consulting IT.",
            power : 3,
          },
          {
            description : "I open emails and attachments from unknown sources out of curiosity.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I remotely accessed your smart home devices and turned them off.",
          power : 3,
        },
        playerCards : [
          {
            description : "I secure my smart home devices with strong, unique passwords and enable two-factor authentication if available.",
            power : 5,
          },
          {
            description : "I use default passwords for my smart home devices as I find them convenient.",
            power : 1,
          },
          {
            description : "I don't use smart home devices, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I tricked you into revealing your personal information by impersonating a trusted friend or family member online.",
          power : 3,
        },
        playerCards : [
          {
            description : "I verify the identity of people online before sharing personal information.",
            power : 4,
          },
          {
            description : "I share personal information online without verifying the recipient's identity.",
            power : 2,
          },
          {
            description : "I believe that everyone online is trustworthy, so I freely share personal information.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I intercepted your mobile banking transactions using a fake Wi-Fi network.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only conduct mobile banking transactions on secure, trusted networks.",
            power : 5,
          },
          {
            description : "I use public Wi-Fi networks for mobile banking without using a VPN or other security measures.",
            power : 1,
          },
          {
            description : "I never use mobile banking as I don't trust online transactions.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I installed keylogging software on your computer to capture your keystrokes and steal passwords.",
          power : 3,
        },
        playerCards : [
          {
            description : "I use anti-keylogging software and regularly update my antivirus protection.",
            power : 5,
          },
          {
            description : "I disable antivirus software because it slows down my computer.",
            power : 1,
          },
          {
            description : "I don't believe keyloggers are a real threat, so I don't take any precautions.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by using information obtained from your social media profiles.",
          power : 2,
        },
        playerCards : [
          {
            description : "I regularly review my social media privacy settings and limit the information I share publicly.",
            power : 4,
          },
          {
            description : "I share personal information on social media without considering privacy settings.",
            power : 1,
          },
          {
            description : "I don't use social media, so I don't have to worry about privacy settings.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I compromised your online accounts by exploiting weak security questions and answers.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use strong security questions and answers that are difficult for others to guess or find online.",
            power : 4,
          },
          {
            description : "I use common security questions and answers that are easy for me to remember.",
            power : 1,
          },
          {
            description : "I don't use security questions on my online accounts because I find them inconvenient.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I hijacked your webcam and recorded your activities without your knowledge.",
          power : 3,
        },
        playerCards : [
          {
            description : "I cover my webcam with a sticker or physical cover when not in use.",
            power : 5,
          },
          {
            description : "I leave my webcam uncovered and connected at all times.",
            power : 1,
          },
          {
            description : "I don't use webcams, so I don't have to worry about privacy concerns.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your email credentials by tricking you into entering them on a fake login page.",
          power : 3,
        },
        playerCards : [
          {
            description : "I always check the URL and SSL certificate before entering login credentials on a website.",
            power : 5,
          },
          {
            description : "I enter login credentials on any website that looks legitimate without verifying its authenticity.",
            power : 1,
          },
          {
            description : "I don't use email or online accounts, so I don't have to worry about phishing attacks.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I compromised your online shopping account and made unauthorized purchases.",
          power : 3,
        },
        playerCards : [
          {
            description : "I enable two-factor authentication on my online shopping accounts for added security.",
            power : 5,
          },
          {
            description : "I share my online shopping account credentials with family members or friends for convenience.",
            power : 1,
          },
          {
            description : "I don't shop online, so I don't have to worry about account security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your cloud storage account and deleted all your files.",
          power : 4,
        },
        playerCards : [
          {
            description : "I use strong, unique passwords and enable two-factor authentication on my cloud storage accounts.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts, including cloud storage.",
            power : 1,
          },
          {
            description : "I don't use cloud storage, so I don't have to worry about account security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I used social engineering tactics to convince you to share your banking PIN over the phone.",
          power : 3,
        },
        playerCards : [
          {
            description : "I never share sensitive information like banking PINs over the phone, even if the caller seems legitimate.",
            power : 5,
          },
          {
            description : "I share sensitive information over the phone without verifying the caller's identity.",
            power : 1,
          },
          {
            description : "I don't use banking services that require PINs, so I don't have to worry about phone scams.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by guessing your security questions.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use security questions with answers that are difficult for others to guess or find online.",
            power : 4,
          },
          {
            description : "I use common security questions with answers that are easy for me to remember.",
            power : 1,
          },
          {
            description : "I don't use security questions on my online accounts because I find them unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I used a USB drive infected with malware to gain access to your computer.",
          power : 3,
        },
        playerCards : [
          {
            description : "I never plug in USB drives from unknown or untrusted sources into my computer.",
            power : 5,
          },
          {
            description : "I plug in USB drives from anyone without considering the potential security risks.",
            power : 1,
          },
          {
            description : "I don't use USB drives, so I don't have to worry about malware infections.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by using a dictionary attack to guess your password.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use a password manager to generate and store strong, unique passwords for all my accounts.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts.",
            power : 1,
          },
          {
            description : "I don't use passwords for my accounts, so I don't have to worry about password security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your social media account by exploiting a vulnerability in the platform.",
          power : 3,
        },
        playerCards : [
          {
            description : "I enable two-factor authentication on my social media accounts for added security.",
            power : 5,
          },
          {
            description : "I disable security features on my social media accounts to make logging in easier.",
            power : 1,
          },
          {
            description : "I don't use social media, so I don't have to worry about account security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your smartphone through a malicious app you downloaded.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only download apps from trusted sources like official app stores and read reviews before downloading.",
            power : 5,
          },
          {
            description : "I download apps from any website without checking their legitimacy.",
            power : 1,
          },
          {
            description : "I don't use smartphones or download apps, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your online banking account through a phishing email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account through brute force attacks.",
          power : 3,
        },
        playerCards : [
          {
            description : "I use complex passwords that combine uppercase, lowercase letters, numbers, and symbols.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts.",
            power : 1,
          },
          {
            description : "I don't use passwords for my accounts, so I don't have to worry about password security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account through a phishing email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your credit card information by installing a skimming device on an ATM.",
          power : 3,
        },
        playerCards : [
          {
            description : "I always check for any signs of tampering before using an ATM.",
            power : 4,
          },
          {
            description : "I use any ATM without checking for signs of tampering.",
            power : 2,
          },
          {
            description : "I avoid using ATMs altogether.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your computer by exploiting a vulnerability in outdated software.",
          power : 3,
        },
        playerCards : [
          {
            description : "I regularly update my software to patch security vulnerabilities.",
            power : 5,
          },
          {
            description : "I ignore software updates because they are inconvenient.",
            power : 1,
          },
          {
            description : "I don't use computers, so I don't have to worry about software vulnerabilities.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your smartphone through a fake app that stole your data.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only download apps from official app stores and check permissions before installing.",
            power : 5,
          },
          {
            description : "I download apps from any website without verifying their authenticity.",
            power : 1,
          },
          {
            description : "I don't use smartphones or download apps, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your online accounts by guessing your security questions.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use unique security questions with answers that are not easily guessed or found online.",
            power : 4,
          },
          {
            description : "I use common security questions with answers that are easy for me to remember.",
            power : 1,
          },
          {
            description : "I don't use security questions on my accounts because I find them unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your social media account through a phishing email.",
          power : 3,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your cloud storage account by guessing your password.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use a password manager to generate and store strong, unique passwords for all my accounts.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts.",
            power : 1,
          },
          {
            description : "I don't use passwords for my accounts, so I don't have to worry about password security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I intercepted your email credentials by monitoring unencrypted public Wi-Fi networks.",
          power : 3,
        },
        playerCards : [
          {
            description : "I always use a VPN when accessing sensitive information over public Wi-Fi networks.",
            power : 5,
          },
          {
            description : "I connect to public Wi-Fi networks without using any security measures.",
            power : 1,
          },
          {
            description : "I never use public Wi-Fi networks, only my home network.",
            power : 3,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account through a phishing email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I installed spyware on your computer to monitor your online activities.",
          power : 3,
        },
        playerCards : [
          {
            description : "I regularly scan my computer for malware and remove any suspicious programs.",
            power : 5,
          },
          {
            description : "I download and install software from untrusted sources without checking for malware.",
            power : 1,
          },
          {
            description : "I never scan my computer for malware as I believe it is unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your identity and opened credit accounts in your name.",
          power : 4,
        },
        playerCards : [
          {
            description : "I monitor my credit report regularly for any unauthorized accounts or transactions.",
            power : 5,
          },
          {
            description : "I share my personal information freely on social media without considering the consequences.",
            power : 1,
          },
          {
            description : "I never check my credit report as I don't think it's important.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your company's confidential information through a phishing email sent to your work email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I report suspicious emails to my company's IT department and never open attachments or click on links.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to my colleagues without consulting IT.",
            power : 3,
          },
          {
            description : "I open emails and attachments from unknown sources out of curiosity.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I remotely accessed your smart home devices and turned them off.",
          power : 3,
        },
        playerCards : [
          {
            description : "I secure my smart home devices with strong, unique passwords and enable two-factor authentication if available.",
            power : 5,
          },
          {
            description : "I use default passwords for my smart home devices as I find them convenient.",
            power : 1,
          },
          {
            description : "I don't use smart home devices, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I tricked you into revealing your personal information by impersonating a trusted friend or family member online.",
          power : 3,
        },
        playerCards : [
          {
            description : "I verify the identity of people online before sharing personal information.",
            power : 4,
          },
          {
            description : "I share personal information online without verifying the recipient's identity.",
            power : 2,
          },
          {
            description : "I believe that everyone online is trustworthy, so I freely share personal information.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I intercepted your mobile banking transactions using a fake Wi-Fi network.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only conduct mobile banking transactions on secure, trusted networks.",
            power : 5,
          },
          {
            description : "I use public Wi-Fi networks for mobile banking without using a VPN or other security measures.",
            power : 1,
          },
          {
            description : "I never use mobile banking as I don't trust online transactions.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I installed keylogging software on your computer to capture your keystrokes and steal passwords.",
          power : 3,
        },
        playerCards : [
          {
            description : "I use anti-keylogging software and regularly update my antivirus protection.",
            power : 5,
          },
          {
            description : "I disable antivirus software because it slows down my computer.",
            power : 1,
          },
          {
            description : "I don't believe keyloggers are a real threat, so I don't take any precautions.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by using information obtained from your social media profiles.",
          power : 2,
        },
        playerCards : [
          {
            description : "I regularly review my social media privacy settings and limit the information I share publicly.",
            power : 4,
          },
          {
            description : "I share personal information on social media without considering privacy settings.",
            power : 1,
          },
          {
            description : "I don't use social media, so I don't have to worry about privacy settings.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I compromised your online accounts by exploiting weak security questions and answers.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use strong security questions and answers that are difficult for others to guess or find online.",
            power : 4,
          },
          {
            description : "I use common security questions and answers that are easy for me to remember.",
            power : 1,
          },
          {
            description : "I don't use security questions on my online accounts because I find them inconvenient.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I hijacked your webcam and recorded your activities without your knowledge.",
          power : 3,
        },
        playerCards : [
          {
            description : "I cover my webcam with a sticker or physical cover when not in use.",
            power : 5,
          },
          {
            description : "I leave my webcam uncovered and connected at all times.",
            power : 1,
          },
          {
            description : "I don't use webcams, so I don't have to worry about privacy concerns.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your email credentials by tricking you into entering them on a fake login page.",
          power : 3,
        },
        playerCards : [
          {
            description : "I always check the URL and SSL certificate before entering login credentials on a website.",
            power : 5,
          },
          {
            description : "I enter login credentials on any website that looks legitimate without verifying its authenticity.",
            power : 1,
          },
          {
            description : "I don't use email or online accounts, so I don't have to worry about phishing attacks.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I compromised your online shopping account and made unauthorized purchases.",
          power : 3,
        },
        playerCards : [
          {
            description : "I enable two-factor authentication on my online shopping accounts for added security.",
            power : 5,
          },
          {
            description : "I share my online shopping account credentials with family members or friends for convenience.",
            power : 1,
          },
          {
            description : "I don't shop online, so I don't have to worry about account security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your cloud storage account and deleted all your files.",
          power : 4,
        },
        playerCards : [
          {
            description : "I use strong, unique passwords and enable two-factor authentication on my cloud storage accounts.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts, including cloud storage.",
            power : 1,
          },
          {
            description : "I don't use cloud storage, so I don't have to worry about account security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I used social engineering tactics to convince you to share your banking PIN over the phone.",
          power : 3,
        },
        playerCards : [
          {
            description : "I never share sensitive information like banking PINs over the phone, even if the caller seems legitimate.",
            power : 5,
          },
          {
            description : "I share sensitive information over the phone without verifying the caller's identity.",
            power : 1,
          },
          {
            description : "I don't use banking services that require PINs, so I don't have to worry about phone scams.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by guessing your security questions.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use security questions with answers that are difficult for others to guess or find online.",
            power : 4,
          },
          {
            description : "I use common security questions with answers that are easy for me to remember.",
            power : 1,
          },
          {
            description : "I don't use security questions on my online accounts because I find them unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I used a USB drive infected with malware to gain access to your computer.",
          power : 3,
        },
        playerCards : [
          {
            description : "I never plug in USB drives from unknown or untrusted sources into my computer.",
            power : 5,
          },
          {
            description : "I plug in USB drives from anyone without considering the potential security risks.",
            power : 1,
          },
          {
            description : "I don't use USB drives, so I don't have to worry about malware infections.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by using a dictionary attack to guess your password.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use a password manager to generate and store strong, unique passwords for all my accounts.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts.",
            power : 1,
          },
          {
            description : "I don't use passwords for my accounts, so I don't have to worry about password security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your social media account by exploiting a vulnerability in the platform.",
          power : 3,
        },
        playerCards : [
          {
            description : "I enable two-factor authentication on my social media accounts for added security.",
            power : 5,
          },
          {
            description : "I disable security features on my social media accounts to make logging in easier.",
            power : 1,
          },
          {
            description : "I don't use social media, so I don't have to worry about account security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your smartphone through a malicious app you downloaded.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only download apps from trusted sources like official app stores and read reviews before downloading.",
            power : 5,
          },
          {
            description : "I download apps from any website without checking their legitimacy.",
            power : 1,
          },
          {
            description : "I don't use smartphones or download apps, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your online banking account through a phishing email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account through brute force attacks.",
          power : 3,
        },
        playerCards : [
          {
            description : "I use complex passwords that combine uppercase, lowercase letters, numbers, and symbols.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts.",
            power : 1,
          },
          {
            description : "I don't use passwords for my accounts, so I don't have to worry about password security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account through a phishing email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your credit card information by installing a skimming device on an ATM.",
          power : 3,
        },
        playerCards : [
          {
            description : "I always check for any signs of tampering before using an ATM.",
            power : 4,
          },
          {
            description : "I use any ATM without checking for signs of tampering.",
            power : 2,
          },
          {
            description : "I avoid using ATMs altogether.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your computer by exploiting a vulnerability in outdated software.",
          power : 3,
        },
        playerCards : [
          {
            description : "I regularly update my software to patch security vulnerabilities.",
            power : 5,
          },
          {
            description : "I ignore software updates because they are inconvenient.",
            power : 1,
          },
          {
            description : "I don't use computers, so I don't have to worry about software vulnerabilities.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your smartphone through a fake app that stole your data.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only download apps from official app stores and check permissions before installing.",
            power : 5,
          },
          {
            description : "I download apps from any website without verifying their authenticity.",
            power : 1,
          },
          {
            description : "I don't use smartphones or download apps, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your online accounts by guessing your security questions.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use unique security questions with answers that are not easily guessed or found online.",
            power : 4,
          },
          {
            description : "I use common security questions with answers that are easy for me to remember.",
            power : 1,
          },
          {
            description : "I don't use security questions on my accounts because I find them unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your social media account through a phishing email.",
          power : 3,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your cloud storage account by guessing your password.",
          power : 2,
        },
        playerCards : [
          {
            description : "I use a password manager to generate and store strong, unique passwords for all my accounts.",
            power : 5,
          },
          {
            description : "I use simple passwords that are easy to remember for all my online accounts.",
            power : 1,
          },
          {
            description : "I don't use passwords for my accounts, so I don't have to worry about password security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I intercepted your email credentials by monitoring unencrypted public Wi-Fi networks.",
          power : 3,
        },
        playerCards : [
          {
            description : "I always use a VPN when accessing sensitive information over public Wi-Fi networks.",
            power : 5,
          },
          {
            description : "I connect to public Wi-Fi networks without using any security measures.",
            power : 1,
          },
          {
            description : "I never use public Wi-Fi networks, only my home network.",
            power : 3,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account through a phishing email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I verify the legitimacy of emails and never click on links or download attachments from unknown sources.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to others without checking their authenticity.",
            power : 2,
          },
          {
            description : "I open emails and click on links from any source without considering the risks.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I installed spyware on your computer to monitor your online activities.",
          power : 3,
        },
        playerCards : [
          {
            description : "I regularly scan my computer for malware and remove any suspicious programs.",
            power : 5,
          },
          {
            description : "I download and install software from untrusted sources without checking for malware.",
            power : 1,
          },
          {
            description : "I never scan my computer for malware as I believe it is unnecessary.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I stole your identity and opened credit accounts in your name.",
          power : 4,
        },
        playerCards : [
          {
            description : "I monitor my credit report regularly for any unauthorized accounts or transactions.",
            power : 5,
          },
          {
            description : "I share my personal information freely on social media without considering the consequences.",
            power : 1,
          },
          {
            description : "I never check my credit report as I don't think it's important.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I accessed your company's confidential information through a phishing email sent to your work email.",
          power : 4,
        },
        playerCards : [
          {
            description : "I report suspicious emails to my company's IT department and never open attachments or click on links.",
            power : 5,
          },
          {
            description : "I forward suspicious emails to my colleagues without consulting IT.",
            power : 3,
          },
          {
            description : "I open emails and attachments from unknown sources out of curiosity.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I remotely accessed your smart home devices and turned them off.",
          power : 3,
        },
        playerCards : [
          {
            description : "I secure my smart home devices with strong, unique passwords and enable two-factor authentication if available.",
            power : 5,
          },
          {
            description : "I use default passwords for my smart home devices as I find them convenient.",
            power : 1,
          },
          {
            description : "I don't use smart home devices, so I don't have to worry about security.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I tricked you into revealing your personal information by impersonating a trusted friend or family member online.",
          power : 3,
        },
        playerCards : [
          {
            description : "I verify the identity of people online before sharing personal information.",
            power : 4,
          },
          {
            description : "I share personal information online without verifying the recipient's identity.",
            power : 2,
          },
          {
            description : "I believe that everyone online is trustworthy, so I freely share personal information.",
            power : 1,
          }
        ]
      },
      {
        hackerCard : {
          description : "I intercepted your mobile banking transactions using a fake Wi-Fi network.",
          power : 3,
        },
        playerCards : [
          {
            description : "I only conduct mobile banking transactions on secure, trusted networks.",
            power : 5,
          },
          {
            description : "I use public Wi-Fi networks for mobile banking without using a VPN or other security measures.",
            power : 1,
          },
          {
            description : "I never use mobile banking as I don't trust online transactions.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I installed keylogging software on your computer to capture your keystrokes and steal passwords.",
          power : 3,
        },
        playerCards : [
          {
            description : "I use anti-keylogging software and regularly update my antivirus protection.",
            power : 5,
          },
          {
            description : "I disable antivirus software because it slows down my computer.",
            power : 1,
          },
          {
            description : "I don't believe keyloggers are a real threat, so I don't take any precautions.",
            power : 2,
          }
        ]
      },
      {
        hackerCard : {
          description : "I gained access to your email account by using information obtained from your social media profiles.",
          power : 2,
        },
        playerCards : [
          {
            description : "I regularly review my social media privacy settings and limit the information I share publicly.",
            power : 4,
          },
          {
            description : "I share personal information on social media without considering privacy settings.",
            power : 1,
          },
          {
            description : "I don't use social media, so I don't have to worry about privacy settings.",
            power : 2,
          }
        ]
      },
    
    
 
  
];