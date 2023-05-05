Feature: I search for flights from 
    
    Scenario: I perform a search for flights
        Given I visit "https://www.iberia.com/"
        When I add origin as "Madrid"
        And I add destination as "Bilbao"
        And I add departure date as "25102023"
        And I add return date as "01012024"
        Then I click Search button
        