import { StyledDefaultPage } from "../../style/layout/StyledDefaultPage";
import {
    StyeldTitleSection,
    StyledCardSection,
    StyledSection,
    StyledTitleSection,
} from "../../style/page/StyledMain";

function Home() {
    return (
        <StyledDefaultPage>
            <StyledSection>
                <StyeldTitleSection>
                    <h1>1학년 4반의</h1>
                    <h1>
                        <span>디미고</span>의 여러 순간을
                    </h1>
                    <h1>같이 기록해요</h1>
                </StyeldTitleSection>
            </StyledSection>
            <StyledCardSection></StyledCardSection>
        </StyledDefaultPage>
    );
}

export default Home;
