import React from "react";
import { ListingItem } from "../../pages/listings-page/listings-page.types";
import { useTranslation } from "react-i18next";
import {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledTh,
  StyledTdWrapped,
} from "../../global-styles/table.styles";
import { EditIcon, IconButton } from "evergreen-ui";
import { useNavigate } from "react-router-dom";

type ListingsTableProps = {
  listings: ListingItem[];
};

const ListingsTable = ({ listings }: ListingsTableProps) => {
  console.log(listings);
  const navigate = useNavigate();
  const { t } = useTranslation(['listing']);

  return (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <StyledTh>{ t('district') }</StyledTh>
          <StyledTh>{ t('neighborhood') }</StyledTh>
          <StyledTh>{ t('price') }</StyledTh>
          <StyledTh>{""}</StyledTh>
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {listings.map((listing, idx) => (
          <StyledTr
            onClick={() => {
              navigate(`/listingdetail/${listing.estateId}`);
            }}
            key={idx}
          >
            <StyledTdWrapped>{listing.district}</StyledTdWrapped>
            <StyledTdWrapped>{listing.neighborhood}</StyledTdWrapped>
            <StyledTdWrapped>
              {listing.estatePrice &&
                `${listing.currencySymbol} ${listing.estatePrice}`}
            </StyledTdWrapped>
            <StyledTdWrapped>
              <IconButton
                icon={EditIcon}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  navigate(`/editlisting/${listing.estateId}`);
                }}
              />
            </StyledTdWrapped>
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

export default ListingsTable;
