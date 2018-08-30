/* ---------------------------------------------------------------
* Navbar dropdown
*/


# navbar
lib.footerNav = COA
lib.footerNav.wrap = |
lib.footerNav {


# navigation
    20 = HMENU
    20.wrap = <ul class="menu">|</ul>
    20 {
        special = directory
        special.value = 2
    #excludeUidList = 11,12
        1 = TMENU
        1 {
            wrap = |
            expAll = 1

            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = <li>|</li>
        #NO.ATagParams = class="footer_navigation--link"
            ACT = 1
            ACT < .NO
            ACT.wrapItemAndSub = <li>|</li>
            CUR = 1
            CUR < .NO
        #CUR.ATagParams =  id="current"
            CUR.wrapItemAndSub = <li>|</li>

        # Dropdown menu
            IFSUB = 1
            IFSUB < .NO
            IFSUB.wrapItemAndSub = <li class="dropdown">|</li>
            IFSUB.ATagParams = class="dropdown-toggle" data-toggle="dropdown" data-target="#"
        #IFSUB.ATagParams = class="dropdown-toggle disabled" role="button" data-toggle="dropdown" data-target="#"
            IFSUB.ATagBeforeWrap = 1
            IFSUB.stdWrap.wrap = |<b class="caret"></b>

            ACTIFSUB = 1
            ACTIFSUB < .IFSUB
            ACTIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>

            CURIFSUB = 1
            CURIFSUB < .ACTIFSUB
            CURIFSUB.wrapItemAndSub = <li class="dropdown active current">|</li>
        }


        2 = TMENU
        2 {
            wrap = <ul class="dropdown-menu" role="menu">|</ul>
            expAll = 1

            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = <li>|</li>
            CUR = 1
            CUR < .NO
            CUR.wrapItemAndSub = <li class="footer_navigation--item">|</li>
            ACT = 1
            ACT < .NO
            ACT.wrapItemAndSub = <li class="footer_navigation--item">|</li>

            IFUSB < .1.IFSUB
            CURIFSUB < .1.CURIFSUB
            ACTIFSUB < .1.ACTIFSUB

            SPC = 1
            SPC.doNotLinkIt = 1
            SPC.doNotShowLink = 1
            SPC.allWrap = <li class="divider"></li>
        }

        3 < .2
    # no submenus anymore
        3.IFSUB >
        3.CURIFSUB >
        3.ACTIFSUB >
    }
}

