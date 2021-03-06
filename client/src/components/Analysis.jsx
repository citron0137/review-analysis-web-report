import React from 'react';
import styled from 'styled-components';
import {Button} from "semantic-ui-react";
import Review from "./Review";
import Trend from "./Trend";
import Keyword from "./Keyword";
import Positioning from "./Positioning";
import Consultant from "./Consultant";

const AnalysisBlock = styled.div`
  
  h3{
    margin: 0;
  }
  header{
    z-index: 1000;
    position: fixed;
    height: 5.5rem;
    width: 100%;
    background: #001bc0;
    //background: rgb(73, 113, 229);
    display: flex;
    align-items: center;
    justify-content: space-between;
    div img{
      margin-left: 2rem;
      width: 120px;
      height: 80px;
    }
    .nav-list{
      display: flex;
      flex-direction: row;
      nav{
        min-width: 100px;
        cursor: pointer;
        font-size: 1.125rem;
        font-weight: bold;
        color: white;
        padding-left: .75rem;
        padding-right: .75rem;
        text-align: center;
      }
      nav + nav{
        border-left: 1px solid white;
      } 
    }
    .button-group{
       margin-right: 2rem;
     }
  }
  main{
    //height: calc(100vh - 5.5rem);
    
    padding: 2rem;
    padding-top: 7.5rem;
    background: rgb(233, 238, 241);
  }
  
`;

const AnalysisComponent = () => {
    return (
        <AnalysisBlock>
            <header>
                <div><img src={'img/logo-white.svg'}/></div>
                <div className={'nav-list'}>
                    <nav>
                        Pos / Neg Review
                    </nav>
                    <nav>
                        Trend
                    </nav>
                    <nav>
                        Detailed Analysis
                    </nav>
                    <nav>
                        Product Positioning
                    </nav>
                    <nav>
                        Business Counseling
                    </nav>
                </div>
                <div className={'button-group'}>
                    <Button basic inverted>
                        Consultant Matching
                    </Button>
                </div>
            </header>
            <main>
                <Review></Review>
                <Trend></Trend>
                <Keyword></Keyword>
                <Positioning></Positioning>
                <Consultant/>
            </main>
        </AnalysisBlock>
    )
}

export default AnalysisComponent;
