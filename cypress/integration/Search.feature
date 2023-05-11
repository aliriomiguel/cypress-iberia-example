Feature: I search for flights
    
    Scenario: I perform a search for flights
        Given I visit "https://www.iberia.com/"
        And I accept the cookies
        When I add origin as "Madrid{enter}"
        And I add destination as "Bilbao{enter}"
        And I add "Departure date" as "10052023"
        And I add "Return date" as "01012024"
        And I click Search button
        And I see the loading screen
        And I select departure flight
        And I select return flight
        And I click Continue button
        