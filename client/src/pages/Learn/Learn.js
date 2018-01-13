
import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { render } from 'react-dom';
import './Learn.css';

const Learn = props => (
   <div className="container" >
   <div className="row">
    <div className="card-deck">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-block">
             <img className="card-img-top" src="https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/13427781_1278460602181364_3724080373537766641_n.jpg?oh=f884b43e992a65e0a61ec97d3b07b59f&oe=5AF09750" alt="Card image cap" />
              <h5 className="card-title">Music + Audio Production in Logic Pro X</h5>
              <h6 className="card-title">Rob Mayzes</h6>
              <p className="card-text">Professional mixer and musician. Founder of Musician on a Mission, an online learning resource for musicians and home recordists with over 25,000 subscribers.
              Successful entrepreneur and co-founder of Sweet Marketing, a global social media management agency.
              </p>
              <a href="https://www.udemy.com/music-production-in-logic-pro-x-course/" className="btn btn-primary">Go to Course</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
           <div className="card card-inverse" style={{backgroundColor: '#e8e8e8', borderColor: '#9a9ca0'}}>
            <div className="card-block">
             <img className="card-img-top" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19989315_10210406608544674_6540323616719357866_n.jpg?oh=ce962513a54c0b4f7e5dc158e047ca14&oe=5AF47A5D" alt="Card image cap" />
              <h5 className="card-title">Guitar Super System Level 3</h5>
              <h6 className="card-title">Tyler Larson</h6>
              <p className="card-text">Tyler Larson is a musician of many influences. With over fifteen years experience playing the guitar, Tyler has appeared on several studio albums, performed with many diverse artists, and studied with some of the most renowned guitarists on the planet.
              </p><br></br>
              <a href="https://www.udemy.com/guitar-super-system-level-3/" className="btn btn-primary">Go to Course</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-block">
             <img className="card-img-top" src="https://udemy-images.udemy.com/user/200_H/5753906_1b3f_4.jpg" alt="Card image cap" />
              <h5 className="card-title">Pianoforall</h5>
              <h6 className="card-title">Robin Hall</h6>
              <p className="card-text">PIANOFORALL is one of the most popular piano courses online and has now taught more than 100,000 students worldwide since 2006. If you would like more information on the course or to read hundreds more amazing reviews check out the pianoforall main website online.
              </p><br></br><br></br>
              <a href="https://www.udemy.com/pianoforall-incredible-new-way-to-learn-piano-keyboard/" className="btn btn-primary">Go to Course</a>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className="row">
    <div className="card-deck">
        <div className="col-sm-4">
          <div className="card card-inverse" style={{backgroundColor: '#e8e8e8', borderColor: '#9a9ca0'}}>
            <div className="card-block">
             <img className="card-img-top" src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/13938391_1443802055646843_6033478823165689122_n.jpg?oh=60fd68f833393b44aab6790c7c2ca6f0&oe=5AB32DDA" alt="Card image cap" />
              <h5 className="card-title">How to Sing #1: Complete Vocal Warmups</h5>
              <h6 className="card-title">Roma Waterman</h6>
              <p className="card-text">In the last two years I have become an online instructor and teach thousands of students all over the world in the areas of voice presentation (for podcasting and teaching), vocal coaching, songwriting, theology and other teacher training such as social media marketing and digital product creation.
              </p>
              <a href="https://www.udemy.com/singing-lessons-online/" className="btn btn-primary">Go to Course</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-block">
             <img className="card-img-top" src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/20246474_705973709595252_2130972334368762739_n.jpg?oh=2915652e5fc8bc8d54f0d00dedeadf29&oe=5AF090A6" alt="Card image cap" />
              <h5 className="card-title">Learn to Play Trombone: Go From Beginner to Pro</h5>
              <h6 className="card-title">MusicProfessor Online Music Lessons</h6>
              <p className="card-text">MusicProfessor high-quality online music lessons for students who either can't study with a private teacher or would like to further supplement their education. We do so via a massive library of lessons taught by some of the finest faculty in the country.Learn how to play the trombone with MusicProfessor's beginner curriculum. Master the range, tone, and technique necessary to become a great trombonist.
              </p>
              <a href="https://www.udemy.com/intermediate-trombone/" className="btn btn-primary">Go to Course</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card card-inverse" style={{backgroundColor: '#e8e8e8', borderColor: '#9a9ca0'}}>
            <div className="card-block">
             <img className="card-img-top" src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/26114057_431602120588734_4863889507467390893_n.jpg?oh=d5e4f212004de62252be401a642bef92&oe=5AF724AC" alt="Card image cap" />
              <h5 className="card-title">Songwriting for Songwriters</h5>
              <h6 className="card-title">Lesson Pros</h6>
              <p className="card-text">After spending most of their lives on the concert stage, Chuck and Sandi felt a strong need to give back to people of all ages. In 2002, they came up with an idea to start a music lesson program.Lesson Pros has helped more than 50,000 students between the ages 4 to 98 find and nurture their talents.
              </p><br></br>
              <a href="https://www.udemy.com/top-10-tips-for-songwriters-with-sandi-millar/" className="btn btn-primary">Go to Course</a>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    );

export default Learn;