Feature: I search for flights from 
    
    Scenario: I perform a search for flights
        Given I visit "https://www.iberia.com/"
        And I accept the cookies
        When I add origin as "Madrid{enter}"
        And I add destination as "Bilbao{enter}"
        And I add "Departure date" as "10052023"
        And I add "Return date" as "01012024"
        Then I click Search button
        