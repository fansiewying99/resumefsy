import logo from './logo.svg';
import React, { Component } from "react";
import { resume } from "./contents/resume.js"
//import './App.css';


class App extends Component {
  data = null;

  constructor(props) {
    super(props);
    this.data = resume();
    console.log(this.data)
  }

  render() {
    return (
      <div className="App">
        <div className="container mt-3 mb-3">
          <div className="hstack gap-3 col-sm-7 mx-auto mb-3">
            <img src={"/images/" + this.data.profile_img} className="rounded-circle border"
              style={{ width: '130px', height: 'auto', objectFit: 'cover', objectPosition: 'centerwidth' }} />
            <div className="container">
              <div className="ms-4">
                <h1 className="mb-n1">{this.data.name}</h1>
                <p style={{ fontSize: '18px' }}>{this.data.subtitle}</p>
              </div>
              <div className="mt-n3 hstack gap-3">
                <div className="col">
                  <div className="hstack gap-3">
                    <img src="/images/ic_location.jpg" className="mt-n3 rounded-circle"
                      style={{ width: '20px', height: 'auto', objectFit: 'cover' }} />
                    <p style={{ fontSize: '14px' }}>{this.data.location}</p>
                  </div>
                  <div className="mt-n3 hstack gap-3 mb-n2">
                    <img src="/images/ic_contact.jpg" className="mt-n3 rounded-circle"
                      style={{ width: '20px', height: 'auto', objectFit: 'cover' }} />
                    <p style={{ fontSize: '14px' }}>{this.data.phone}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="hstack gap-3">
                    <img src="/images/ic_email.jpg" className="mt-n3 rounded-circle"
                      style={{ width: '20px', height: 'auto', objectFit: 'cover' }} />
                    <p style={{ fontSize: '14px' }}>{this.data.email}</p>
                  </div>
                  <a href="https://www.linkedin.com/in/fsying99" className="mt-n3 hstack gap-3 mb-n2">
                    <img src="/images/ic_linkedin.jpg" className="mt-n3 rounded-circle"
                      style={{ width: '20px', height: 'auto', objectFit: 'cover' }} />
                    <p style={{ fontSize: '14px' }}>{this.data.linkedin}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row ms-0 me-0">
            <div className="col-sm-8">
              <div className="card border-primary mb-3">
                <div className="card-header">
                  <p style={{ fontSize: '20px' }} className="ms-2 mb-n1">Education</p>
                </div>
                <div className="card-body">
                  {this.data.educations.map(edu => (
                    <div>
                      <div className="row">
                        <img src={"/images/" + edu.img} className="mx-auto col-sm-2"
                          style={{ width: 'auto', height: '50px', objectFit: 'cover' }} />
                        <div className="col-sm-10">
                          <h5 className="card-title mb-0">{edu.certificate}</h5>
                          <div className="hstack">
                            <img src="/images/ic_location.jpg" className=" rounded-circle"
                              style={{ width: '20px', height: 'auto', objectFit: 'cover' }} />
                            <p className="card-text ">{edu.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 ms-2">
                        <div className="row">
                          <p className="card-text col-3 mb-0">Graduation Date</p>
                          <p className="card-text col-9 mb-0">: {edu.graduation_date}</p>
                        </div>
                        <div className="row">
                          <p className="card-text col-3 mb-0">Result</p>
                          <p className="card-text col-9 mb-0">: {edu.result}</p>
                        </div>
                        <div className="row">
                          <p className="card-text col-3">Key Modules</p>
                          <p className="card-text col-9">: {edu.key_modules}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              <div className="card border-primary mb-3">
                <div className="card-header">
                  <p style={{ fontSize: '20px' }} className="ms-2 mb-n1">Work Experience</p>
                </div>
                <div className="card-body">
                  {this.data.works.map(work => (
                    <div>
                      <div className="row">
                        <img src={"/images/" + work.img} className="mx-auto col-sm-2"
                          style={{ width: 'auto', height: '45px', objectFit: 'cover' }} />
                        <div className="col-sm-10">
                          <div className="hstack">
                            <h5 className="card-title mb-0">{work.position}</h5>
                            <label className="ms-2 mb-1">{" (" + work.duration + ")"}</label>
                          </div>
                          <div className="hstack">
                            <img src="/images/ic_location.jpg" className=" rounded-circle"
                              style={{ width: '20px', height: 'auto', objectFit: 'cover' }} />
                            <p className="card-text">{work.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 ms-2 ">
                        <ul className="mb-0">
                          {work.responsibilities.map(desc => (
                            <li>
                              {(typeof desc === 'string') ?
                                desc
                                :
                                <ul className="mb-0">
                                  {desc.map(pt => (
                                    <li>{pt}</li>
                                  ))}
                                </ul>
                              }
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                  }
                </div>
              </div>
              <div className="card border-primary mb-3">
                <div className="card-header">
                  <p style={{ fontSize: '20px' }} className="ms-2 mb-n1">Achievements</p>
                </div>
                <div className="card-body">
                  {this.data.achievements.map(achievement => (
                    <div className="mb-3">
                      <div className="hstack card-title">
                        <h5 className="mt-n1 mb-n2 ms-2 ">{achievement.title + " "}</h5>
                        <label className="mt-n1 mb-n2 ms-2 ">({achievement.year})</label>
                      </div>
                      <div className="mt-2 ms-2 ">

                        <ul className="mb-0">
                          {achievement.description.map(desc => (
                            (typeof desc === 'string') ?
                              <li>
                                {desc}
                              </li>
                              :
                              <li>
                                {desc.desc}
                                <ul className="mb-0">
                                  {desc.pt.map(pt => (
                                    <li>{pt}</li>
                                  ))}
                                </ul>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card border-primary mb-3">
                <div className="card-header">
                  <p style={{ fontSize: '20px' }} className="ms-2 mb-n1">Areas Of Expertise</p>
                </div>
                <div className="card-body">
                  <div>
                    <h5>Experience In</h5>
                    <div className="row ms-n2 me-2">
                      <img src="/images/logo_java.png" className="ms-n2 mx-auto col"
                        style={{ width: '50px', height: 'auto' }} />
                      <img src="/images/logo_python.png" className="mx-auto col"
                        style={{ width: '50px', height: 'auto' }} />
                      <img src="/images/logo_mysql.png" className="mx-auto col"
                        style={{ width: '50px', height: 'auto' }} />
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h5>Fundamental In Web Programming</h5>
                    <div className="row ms-0 me-1">
                      <img src="/images/logo_web.png" className="mx-auto col"
                        style={{ width: '50px', height: 'auto' }} />
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h5>Fundamental In Mobile Application Development</h5>
                    <div className="row ms-1 me-1">
                      <img src="/images/logo_android_studio.png" className=" mx-auto col"
                        style={{ width: '50px', height: 'auto' }} />
                    </div>
                  </div>
                  <div className=" mt-4 mb-3">
                    <h5>Little Experience In Web Frameworks</h5>
                    <div className="row ms-n2 ">
                      <img src="/images/logo_react.png" className="mx-auto col"
                        style={{ width: '50px', height: 'auto' }} />
                      <img src="/images/logo_django.png" className="mx-auto col"
                        style={{ width: '50px', height: 'auto' }} />
                      <img src="/images/logo_spring_boot.png" className="mx-auto col"
                        style={{ width: '50px', height: 'auto' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border-primary mb-2">
                <div className="card-header">
                  <p style={{ fontSize: '20px' }} className="ms-2 mb-n1">Languages</p>
                </div>
                <div className="card-body">
                  {this.data.languages.native.length > 0 ?
                    <div className="mb-3">
                      <h5>Beginner in</h5>
                      <div className=" text-center">
                        {this.data.languages.native.map(language => (
                          <p>{language}</p>
                        ))}
                      </div>
                    </div>
                    : ""
                  }
                  {this.data.languages.fluent.length > 0 ?
                    <div className="mb-3">
                      <h5>Fluent in</h5>
                      <div className=" text-center">
                        {this.data.languages.fluent.map(language => (
                          <p className="mb-0">{language}</p>
                        ))}
                      </div>
                    </div>
                    : ""
                  }
                  {this.data.languages.proficient.length > 0 ?
                    <div className="mb-3">
                      <h5>Proficient in</h5>
                      <div className=" text-center">
                        {this.data.languages.proficient.map(language => (
                          <p>{language}</p>
                        ))}
                      </div>
                    </div>
                    : ""
                  }
                  {this.data.languages.intermediate.length > 0 ?
                    <div className="mb-3">
                      <h5>Intermediate in</h5>
                      <div className=" text-center">
                        {this.data.languages.intermediate.map(language => (
                          <p>{language}</p>
                        ))}
                      </div>
                    </div>
                    : ""
                  }
                  {this.data.languages.beginner.length > 0 ?
                    <div className="mb-3">
                      <h5>Beginner in</h5>
                      <div className="text-center">
                        {this.data.languages.beginner.map(language => (
                          <p>{language}</p>
                        ))}
                      </div>
                    </div>
                    : ""
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
