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
        And I see the loading screen
        And I fill the passengers name with "Alirio"
        And I fill the passengers surname with "Aranguren"
        And I fill the contact name with "Alirio"
        And I fill the contact surname with "Aranguren"
        And I fill the contact email with "aaranguren@iteggo.com"
        And I fill the contact repeat email with "aaranguren@iteggo.com"
        And I fill the contact phone with "747482348"
        And I check the disable offers checkbox
        And I click form Continue button
        