@Computer

Feature: I m on home page so I can buy a products from computer category
       so that I can email to friend

   Scenario: I am able to purchase products

    Given I am on homepage
    When I click on the computer category
    And  I click on desktop from computer category
    And I click on first product
    And I click on the Email a friend
    And I enter the friend email address
    And I enter my email address
    And I write the massage to friend Hope you doing well
    And I click on the send email Button
    Then I should able to buy product and send review for with massage successfully